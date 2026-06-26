import { sendErrorResponse } from "../utils/response.js";
import path from "path";
import userdata from "../data/userdata.json" with { type: "json" };
export const users = [];
let id = 1;

export function getUser(req, res) {
  res.status(200).json({
    message: "all user names",
    users,
  });

  let uu = [...userdata].sort((a, b) => a.place.localeCompare(b.place));
  console.log(uu);
}

export function postUser(req, res) {
  const { name, place } = req.body;

  let obj = {
    id: id++,
    name,
    place,
    cart: [],
  };

  users.push(obj);
  return sendSuccessResponse("user name is added", obj, 200);
  // res.status(200).json({
  //   message: "user name is added",
  //   success: true,
  // });
}

export function getUserById(req, res) {
  const id = req.params.id;

  if (!id) {
    return sendErrorResponse(res, {
      statusCode: 404,
      message: "id is not found",
    });
  }

  let ans = users.find((uu) => uu.id == id);
  return sendSuccessResponse("user found", ans, 200);

  // res.status(200).json({
  //   message: "user found",
  //   user: ans,
  // });
}

export function getHtmlFile(req, res) {
  // console.log(path.resolve("view/showHtml.html"));
  const fileDireaction = path.resolve("view/showHtml.html");
  res.sendFile(fileDireaction);
}
