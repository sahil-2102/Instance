import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import router from './routes/auth.routes.js';
dotenv.config();
const app = express();
const port = process.env.PORT;
connectDB();
const allowedOrigins = ['http://localhost:5173'];
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins,credentials: true}));
app.get('/', (req, res) => {
    res.send("Hello World!");
});
app.use('/api/auth', router);
app.listen(port, () => {
    console.log(`Server running on: localhost:${port}`)
})
