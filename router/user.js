import express from "express";
import { getHtmlFile, getUser, getUserById, postUser } from "../controller/userController.js";

export const userRouter = express.Router();



userRouter.get("/users",getUser);

userRouter.post("/users",postUser);

userRouter.get("/users/:id",getUserById);

userRouter.get("/", getHtmlFile)