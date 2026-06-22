
export const products = [];
let id = 1;

export function getProduct(req,res){
  res.status(200).json({
    message:"all products names",
    products
  });
};

export function postProduct(req,res){
  const {name,price} = req.body;
  
    let obj = {
      id: id++,
      name,
      price
    };
  
    products.push(obj);
    res.status(200).json({
      message:"product name is added",
      success:true
    });
};

export function getProductById(req,res){
  const id = req.params.userid;
  if(!id){
    return res.json({
    message:"product not found"
  });
  }

  let ans = products.find((uu)=>uu.id == id);

  res.status(200).json({
    message:"product found",
    product:ans
  });
};