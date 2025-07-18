import express from 'express';
import protectedRoute from '../middlewares/protect.middleware.js';
import {currentUser} from '../controllers/user.controller.js';
const router = express.Router();
router.get('/me',protectedRoute,currentUser);

export default router;