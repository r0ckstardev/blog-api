import { Router } from "express";

export const postRouter = Router();

postRouter.get('/', () => {
    console.log("Hello Post!")
});