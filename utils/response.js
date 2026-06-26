
export const sendErrorResponse = (res,err) =>{
  let statusCode = err.statusCode;
  let message = err.message;

  return res.status(statusCode).json({
    message,
    success: false
  });
};


export const sendSuccessResponse = (message,data,statusCode) =>{

  return res.status(statusCode).json({
    message:data ,
    success: true
  });
}