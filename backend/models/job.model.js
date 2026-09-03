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
      trim: true,
    },
    source: {
      type: String,
      default: "Adzuna",
    },

    externalJobId: {
      type: String,
    },
    salaryMin : {
        type : Number
    },
    salaryMax : {
        type : Number
    },
    location: {
      type: String,
      trim: true,
    },

    jobUrl: {
      type: String,
    },

    description: {
      type: String,
    },

    requiredSkills: {
      type: [String],
      default: [],
    },

    experience: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const jobModel = mongoose.model("Job", jobSchema);

export default jobModel;