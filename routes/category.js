import { Router } from "express";
import { createCategory, deleteCategory, returnCategories, returnCategory, updateCategory, wipeCategories } from "../controllers/category.js";

export const categoryRouter = Router();

categoryRouter.get('/', (req, res, next) => {
    returnCategories(req, res ,next)    
});

categoryRouter.get('/:id', (req, res, next) => {
    returnCategory(req, res ,next)
});

categoryRouter.post('/', (req, res, next) => {
    createCategory(req, res ,next)
});

categoryRouter.delete('/', (req, res, next) => {
    wipeCategories(req, res ,next)
});

categoryRouter.delete('/:id', (req, res, next) => {
    deleteCategory(req, res ,next)
});

categoryRouter.patch('/', (req, res, next) => {
    updateCategory(req, res ,next)
});