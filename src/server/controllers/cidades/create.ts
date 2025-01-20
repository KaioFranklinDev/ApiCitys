import { RequestHandler } from 'express';
import {  StatusCodes } from 'http-status-codes';
import * as yup from 'yup';


interface iCidades{
  name:string,
  state:string
}

const bodyValidation: yup.Schema<iCidades> = yup.object().shape({
  name: yup.string().required().min(3),
  state: yup.string().required().min(3),
});

export const crateBodyValidator: RequestHandler = async (req, res, next)=>{
  try{
    await bodyValidation.validate(req.body, {abortEarly : false});
    return next();
  } 
  catch(error) {
    const YupError = error as yup.ValidationError;
    const Errors: Record<string, string> = {};

    YupError.inner.forEach(err => {
      if(!err.path) return;
      Errors[err.path] = err.message;
    });

    res.status(StatusCodes.BAD_REQUEST).json({ Errors }) ;
    return;
  }

};

export const create : RequestHandler = async (req, res)=>{
  
  res.status(StatusCodes.CREATED).json(req.body);
  return;
  
};