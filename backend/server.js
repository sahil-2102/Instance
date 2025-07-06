import express, { urlencoded } from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
configDotenv();
const app = express();
const port = process.env.PORT;
connectDB();
const allowedOrigins = ['http://localhost:5173'];
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins,credentials: true}));
app.get('/', (req, res) => {
    res.send("Hello World!");
})
app.listen(port, () => {
    console.log(`Server running on: localhost:${port}`)
})
