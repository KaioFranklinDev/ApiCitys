import { RequestHandler } from 'express';
import {  StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';


interface iCidades{
  name:string,
  state:string
}

const bodyValidation: yup.Schema<iCidades> = yup.object().shape({
  name: yup.string().required().min(3),
  state: yup.string().required().min(3),
});

interface ifilter{
  rua:string
  
}

const filterValidation: yup.Schema<ifilter> = yup.object().shape({
  rua: yup.string().required().min(5),
  
});


export const createValidation = validation('body', bodyValidation);

export const createFilterValidation = validation('body', filterValidation);






export const create : RequestHandler = async (req, res)=>{
  
  res.status(StatusCodes.CREATED).json(req.body);
  return;
  
};