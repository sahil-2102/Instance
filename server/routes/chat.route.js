import express from 'express';
import protectedRoute from '../middlewares/protect.middleware.js';
import { getAllChats, getSingleChat } from '../controllers/chat.controller.js';

const router = express.Router();

router.post('/get',protectedRoute, getSingleChat);
router.get('/all',protectedRoute,getAllChats);

export default router;