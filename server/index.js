import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
dotenv.config();
connectDB();
const app = express();
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());
const port = process.env.PORT || 5000

app.listen(port, ()=> {
    console.log(`Server running on port:${port}`);
    
})