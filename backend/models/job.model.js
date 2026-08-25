import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      trim: true,
    },

    jobUrl: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    requiredSkills: {
      type: [String],
      default: [],
    },

    experience: {
      type: String,
    },

    salary: {
      type: String,
    },

    employmentType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship", "Contract"],
    },
  },
  {
    timestamps: true,
  }
);

const jobModel = mongoose.model("Job", jobSchema);

export default jobModel;