export const users = [];
let id = 1;

export function getUser(req,res){
  res.status(200).json({
    message:"all user names",
    users
  });
};

export function postUser(req,res){
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
};

export function getUserById(req,res){
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
};