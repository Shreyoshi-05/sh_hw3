import express from "express";
import { getCartItem, postCartItem } from "../controller/cartController.js";

export const cartRouter = express.Router();

cartRouter.get("/cart/:userid",getCartItem);

cartRouter.post("/cart/:userid",postCartItem);