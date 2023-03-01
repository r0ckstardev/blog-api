import { Router } from "express";
import { createUser } from "../controllers/user.js";
export const authRouter = Router();

authRouter.post('/create', (req, res, next) => {
    createUser(req, res, next)
} )