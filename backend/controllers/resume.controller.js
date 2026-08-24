import resumeModel from '../models/resume.model.js';
import uploadFile from '../services/imagekit.service.js';

const takeResume = async (req, res) => {
  try {
    console.log("req.user:", req.user);
    if (!req.file) {
      return res.status(400).json({
        message: "Resume is required",
      });
    }

    const uploadResult = await uploadFile(req.file);

    const resume = await resumeModel.create({
      user: req.user.id,
      resume: uploadResult.url,
    });

    return res.status(201).json({
      message: "Resume uploaded successfully",
      resume,
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