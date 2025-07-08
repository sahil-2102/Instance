import { Router } from "express";
import isAuthenticated from '../middlewares/auth.middleware.js'
import { userData } from "../controllers/user.controller.js";
const router = Router();

router.get('/me', isAuthenticated, userData );


export default router;