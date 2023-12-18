import { Router } from "express";
import ProductsController from "../controllers/ProductsController";

const productsRoutes = Router();

productsRoutes.get("/", ProductsController.list);

export default productsRoutes;