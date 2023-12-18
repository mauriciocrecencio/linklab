import { Router } from "express";
import CategoriesController  from "../controllers/CategoriesController";
import ProductsController from "../controllers/ProductsController";

const productsRoutes = Router();

// @ts-ignore
productsRoutes.get("/", ProductsController.list);

export default productsRoutes;