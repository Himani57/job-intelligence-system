import express from 'express';
import verifyToken from '../middleware/auth.middleware.js';
import resumeController from '../controllers/resume.controller.js';
import uploads from '../middleware/upload.middleware.js';


const route = express.Router();

route.post('/addResume',verifyToken,uploads.single('resume'),resumeController.takeResume);

export default route;