import { signup, login, logout } from "../controllers/auth.controller.js";
import { Router } from "express";
import protectedRoute from "../middlewares/protect.middleware.js";

const router = Router();
router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',protectedRoute, logout);

export default router;