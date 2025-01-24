import {  Request, RequestHandler  } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';


interface IParamsProps {
    id?: number ;
};

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
  
}));

export const deleteById:RequestHandler = async (req:Request<IParamsProps>, res) => {
  console.log(req.params);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("é para apagar Teresina!");

  return;
};
