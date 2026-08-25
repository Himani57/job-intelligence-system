import express from 'express';
import authRoutes from './routes/auth.route.js';
import resumeRoutes from './routes/resume.route.js'
import cookieParser from 'cookie-parser';
import jobRoutes from './routes/job.route.js';


const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api',authRoutes);
app.use('/api',resumeRoutes);
app.use('/api',jobRoutes);

export default app;