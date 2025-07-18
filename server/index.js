import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
dotenv.config();
connectDB();
const app = express();
app.use(cors({origin: 'http://localhost:5173', credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());
const port = process.env.PORT || 5000

app.use('/api/auth',authRoutes);
app.use('/api/user', userRoutes);




app.listen(port, ()=> {
    console.log(`Server running on port:${port}`);
    
})