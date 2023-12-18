import { Request, Response } from "express";
import { ProductModel } from "../models/Product";

class ProductsController {
  async list(req: Request, res: Response) { 
    const products = await ProductModel.find()
    res.status(201).json(products)
  }
}

export default new ProductsController()