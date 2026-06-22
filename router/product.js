import express from "express";
import { getProduct, getProductById, postProduct } from "../controller/productController.js";

export const productRouter = express.Router();




productRouter.get("/products",getProduct);

productRouter.post("/products",postProduct);

productRouter.get("/products/:userid",getProductById);