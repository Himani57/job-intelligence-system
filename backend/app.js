import express from 'express';
import authRoutes from './routes/auth.route.js';
import resumeRoutes from './routes/resume.route.js'
import cookieParser from 'cookie-parser';
import jobRoutes from './routes/job.route.js';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))
app.use(cookieParser());

app.use('/api',authRoutes);
app.use('/api',resumeRoutes);
app.use('/api',jobRoutes);

export default app;