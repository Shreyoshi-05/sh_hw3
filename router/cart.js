import express from "express";
import { users } from "./user.js";
import { products } from "./product.js";

export const cartRouter = express.Router();

let cartItems = [];

cartRouter.get("/cart/:userid",(req,res)=>{
  const id = req.params.userid;

  if(!id){
    return res.status(200).json({
    message: "user is not available"
  })
  }

  let ans = users.find((uu) => uu.id == id);

  res.status(200).json({
    message: "this is all user cart list",
    cart: ans.cart,
  });
});

cartRouter.post("/cart/:userid",(req,res)=>{
  const id = req.params.userid;
  const {productid} = req.body;

  const uu = users.find((uu) => uu.id == id);
  if(!uu){
    return res.send("user not found");
  }

  const pp = products.find((p) => p.id == productid);
  if (!pp) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  uu.cart.push(pp);

  res.status(200).json({
    message: "Product added to cart",
    cart: uu.cart
  });
});