import resumeModel from "../models/resume.model.js";
import jobModel from "../models/job.model.js";

import uploadFile from "../services/imagekit.service.js";
import extractResumeText from "../services/extractedText.service.js";

import { createSingleEmbedding } from "../services/embedding.service.js";

import {
  storeResumeVectors,
  findMatchingJobs,
} from "../services/pinecone.service.js";

import crypto from "crypto";


const takeResume = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!req.file) {
      return res.status(400).json({
        message: "Resume is required",
      });
    }

    // Create file hash
    const fileHash = crypto
      .createHash("sha256")
      .update(req.file.buffer)
      .digest("hex");


    // Check duplicate resume
    const existingResume = await resumeModel.findOne({
      user: userId,
      fileHash,
    });

    if (existingResume) {
      return res.status(409).json({
        message: "This resume is already uploaded",
      });
    }


    // Upload resume
    const uploadResult = await uploadFile(req.file);

    if (!uploadResult?.url) {
      return res.status(400).json({
        message: "Resume upload failed",
      });
    }


    // Extract text
    const extractedText = await extractResumeText(uploadResult.url);


    // Create ONE resume vector
    const vector = await createSingleEmbedding(extractedText);

    if (!vector || !vector.length) {
      return res.status(400).json({
        message: "No embedding generated",
      });
    }


    // Save resume in MongoDB
    const resume = await resumeModel.create({
      user: userId,
      resume: uploadResult.url,
      extractedText,
      fileHash,
    });


    // Store resume vector in Pinecone
    await storeResumeVectors({
      vector,
      userId,
      resumeId: resume._id,
    });


    // Find Top 10 matching jobs from Pinecone
    const matchedJobs = await findMatchingJobs(vector);


    // Get complete job details from MongoDB
    const recommendedJobs = [];

    for (const match of matchedJobs) {
      const job = await jobModel.findById(
        match.metadata.jobId
      );

      if (job) {
        recommendedJobs.push({
          ...job.toObject(),
          matchScore: match.score,
        });
      }
    }


    // Send response
    return res.status(201).json({
      message: "Resume uploaded successfully",
      resume,
      recommendedJobs,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};


export default {
  takeResume,
};