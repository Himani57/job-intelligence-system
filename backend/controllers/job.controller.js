import jobModel from "../models/job.model.js";
import fetchJobs from "../services/adzuna.service.js";
import { createSingleEmbedding } from "../services/embedding.service.js";
import { storeJobVectors } from "../services/pinecone.service.js";

// Adzuna se jobs fetch karke DB + Pinecone mein store
const syncJobs = async (req, res) => {
  try {
    const roles = [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Software Engineer",
    ];

    const savedJobs = [];

    for (const role of roles) {
      const jobs = await fetchJobs(role);

      for (const job of jobs) {
        const existingJob = await jobModel.findOne({
          externalJobId: job.id,
        });

        // Already DB mein hai
        if (existingJob) {
          continue;
        }

        // MongoDB mein save
        const newJob = await jobModel.create({
          externalJobId: job.id,
          title: job.title,
          company: job.company?.display_name || "Unknown",
          location: job.location?.display_name || "Unknown",
          description: job.description || "",
          salaryMin: job.salary_min,
          salaryMax: job.salary_max,
          jobUrl: job.redirect_url,
          employmentType: job.contract_time,
          source: "Adzuna",
        });

        // One Job = One Vector
        const jobText = `
Title: ${newJob.title}
Description: ${newJob.description}
        `;

        const vector = await createSingleEmbedding(jobText);

        // Pinecone mein store
        await storeJobVectors({
          vector,
          jobId: newJob._id,
          title: newJob.title,
          company: newJob.company,
          description: newJob.description,
        });

        savedJobs.push(newJob);
      }
    }

    return res.status(200).json({
      message: "Jobs synced successfully",
      totalNewJobs: savedJobs.length,
      jobs: savedJobs,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Failed to sync jobs",
      error: error.message,
    });
  }
};


// MongoDB se saari jobs frontend ko dena
const getAllJobs = async (req, res) => {
try {
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 4;

const skip = (page - 1) * limit;

const totalJobs = await jobModel.countDocuments();

const jobs = await jobModel
  .find()
  .skip(skip)
  .limit(limit);

return res.status(200).json({
  message: "Jobs fetched successfully",
  jobs,
  pagination: {
    currentPage: page,
    totalPages: Math.ceil(totalJobs / limit),
    totalJobs,
    limit,
    hasNextPage: page < Math.ceil(totalJobs / limit),
    hasPreviousPage: page > 1,
  },
});

} catch (error) {
return res.status(500).json({
message: "Failed to fetch jobs",
error: error.message,
});
}
};

export default {
  syncJobs,
  getAllJobs,
};