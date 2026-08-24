import express from 'express';
import authRoutes from './routes/auth.route.js';
import resumeRoutes from './routes/resume.route.js'


const app = express();
app.use(express.json());

app.use('/api',authRoutes);
app.use('/api',resumeRoutes);

export default app;