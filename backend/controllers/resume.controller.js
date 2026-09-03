import resumeModel from '../models/resume.model.js';
import uploadFile from '../services/imagekit.service.js';
import extractResumeText from '../services/extractedText.service.js';
import {createEmbeddings} from '../services/embedding.service.js';
import {storeResumeVectors} from '../services/pinecone.service.js';
import crypto from 'crypto';

const takeResume = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!req.file) {
      return res.status(400).json({
        message: "Resume is required",
      });
    }

    const fileHash = crypto.createHash("sha256").update(req.file.buffer).digest("hex");

    const existingResume = await resumeModel.findOne({
      user : userId,
      fileHash
    })

    if (existingResume) {
      return res.status(409).json({
      message: "This resume is already uploaded",
    });
}

    const uploadResult = await uploadFile(req.file);

    if(!uploadResult?.url){
      return res.status(401).json({
        message : "File is already present"
      })
    }

    const extractedText = await extractResumeText(uploadResult.url);

    const {chunks,vectors} = await createEmbeddings(extractedText);

    if (!chunks.length || !vectors.length) {
      return res.status(400).json({
      message: "No text chunks or embeddings generated",
    });
}

    const resume = await resumeModel.create({
      user: userId,
      resume: uploadResult.url,
      extractedText : extractedText,
      fileHash
    });

    await storeResumeVectors({
      chunks,
      vectors,
      userId,
      resumeId : resume._id
    })

    return res.status(201).json({
      message: "Resume uploaded successfully",
      resume,
      extractedText,
      chunks,
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