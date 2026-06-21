import express from "express";
import { cartRouter } from "./router/cart.js";
import { userRouter } from "./router/user.js";
import { productRouter } from "./router/product.js";

const app = express();

app.use(express.json());
app.use(cartRouter);
app.use(userRouter);
app.use(productRouter);

const port = 3000;
app.listen(port,()=>{
  console.log("server is running on ",port);
})