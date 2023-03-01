import { Router } from "express";

export const tagRouter = Router();

tagRouter.get('/', () => {
    console.log("Hello tag!")
});