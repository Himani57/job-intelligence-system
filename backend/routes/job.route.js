import { Router } from "express";
import jobController from "../controllers/job.controller.js";

const router = Router();

router.post("/jobs/sync", jobController.syncJobs);

router.get("/jobs", jobController.getAllJobs);

export default router;