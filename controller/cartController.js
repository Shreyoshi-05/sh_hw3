import { sendErrorResponse, sendSuccessResponse } from "../utils/response.js";
import { products } from "./productController.js";
import { users } from "./userController.js";

let cartItems = [];

export function getCartItem(req, res) {
  const id = req.params.userid;

  if (!id) {
    return sendErrorResponse(res, {
      statusCode: 404,
      message: "id is not found",
    });
  }

  let ans = users.find((uu) => uu.id == id);

  return sendSuccessResponse("this is all user cart list", ans.cart, 200);

  // res.status(200).json({
  //   message: "this is all user cart list",
  //   cart: ans.cart,
  // });
}

export function postCartItem(req, res) {
  const id = req.params.userid;
  const { productid } = req.body;

  const uu = users.find((uu) => uu.id == id);
  if (!uu) {
    return sendErrorResponse(res, {
      statusCode: 404,
      message: "user is not found",
    });
  }

  const pp = products.find((p) => p.id == productid);
  if (!pp) {
    return sendErrorResponse(res, {
      statusCode: 404,
      message: "Product is not found",
    });
  }

  uu.cart.push(pp);
  return sendSuccessResponse("Product added to cart", uu.cart, 200);


  // res.status(200).json({
  //   message: "Product added to cart",
  //   cart: uu.cart,
  // });
}
