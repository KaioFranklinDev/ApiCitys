import { Request, Response } from 'express';
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

export const create = async (req: Request<{}, {}, iCidades>, res: Response)=>{
  let validateDate:iCidades | undefined = undefined;
  try{
    validateDate = await bodyValidation.validate(req.body, {abortEarly : false});
  } 
  catch(error) {
    const YupError = error as yup.ValidationError;
    const Errors: Record<string, string> = {};

    YupError.inner.forEach(err => {
      if(!err.path) return;
      Errors[err.path] = err.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({ Errors }) ;
  }

  return res.status(StatusCodes.CREATED).json(validateDate);
  
};