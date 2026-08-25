import express from 'express';
import jobController from '../controllers/job.controller.js'

const route = express.Router();

route.get("/fetch-jobs",jobController.fetchJobs);


export default route;