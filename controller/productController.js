import { sendSuccessResponse } from "../utils/response.js";

export const products = [];
let id = 1;

export function getProduct(req, res) {
  sendSuccessResponse("all products names", products, 200);
  // res.status(200).json({
  //   message: "all products names",
  //   products,
  // });
}

export function postProduct(req, res) {
  const { name, price } = req.body;

  if (!name || !price) {
    return sendErrorResponse(res, {
      statusCode: 404,
      message: "name and price of product should be given",
    });
  }

  let obj = {
    id: id++,
    name,
    price,
  };

  products.push(obj);

  sendSuccessResponse("product name is added", obj, 200);
  // res.status(200).json({
  //   message: "product name is added",
  //   success: true,
  // });
}

export function getProductById(req, res) {
  const id = req.params.userid;
  if (!id) {
    return sendErrorResponse(res, {
      statusCode: 404,
      message: "id is not found",
    });
  }

  let ans = products.find((uu) => uu.id == id);
  sendSuccessResponse("product found", ans, 200);

  // res.status(200).json({
  //   message: "product found",
  //   product: ans,
  // });
}
