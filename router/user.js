import express from "express";

export const userRouter = express.Router();

export const users = [];
let id = 1;

userRouter.get("/users",(req,res)=>{
  res.status(200).json({
    message:"all user names",
    users
  });
});

userRouter.post("/users",(req,res)=>{
  const {name,place} = req.body;

  let obj = {
    id: id++,
    name,
    place,
    cart:[]
  };

  users.push(obj);
  res.status(200).json({
    message:"user name is added",
    success:true
  });

});

userRouter.get("/users/:id",(req,res)=>{
  const id = req.params.id;
  if(!id){
    return res.json({
    message:"user not found"
  });
  }

  let ans = users.find((uu)=>uu.id == id);

  res.status(200).json({
    message:"user found",
    user:ans
  });
});