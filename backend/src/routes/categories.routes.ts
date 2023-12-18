import { Router } from "express";
import CategoriesController  from "../controllers/CategoriesController";

const categoriesRoutes = Router();

// @ts-ignore
categoriesRoutes.get("/", CategoriesController.list);

export default categoriesRoutes;