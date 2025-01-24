import {  Request, RequestHandler  } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';


interface IParamsProps {
    id?: number ;
};

interface IBodyProps {
    nome?: string ;
};




export const updateByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
  
}));

export const updateById:RequestHandler = async (req:Request<IParamsProps,{} , IBodyProps>, res) => {
  console.log(req.params);
  console.log(req.body);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("update by id");

  return;
};
