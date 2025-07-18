import express from 'express';
import protectedRoute from '../middlewares/protect.middleware.js';
import { sendMessage, getMessages } from "../controllers/message.controller.js";

const router = express.Router();
router.post('/', protectedRoute,sendMessage);
router.get('/:id',protectedRoute,getMessages);

export default router;