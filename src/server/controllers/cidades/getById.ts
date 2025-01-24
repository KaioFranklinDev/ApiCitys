import {  Request, RequestHandler  } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';


interface IQuaryParams {
    id?: number ;
};

export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IQuaryParams>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
  
}));

export const getById:RequestHandler = async (req:Request<IQuaryParams>, res) => {
  console.log(req.params);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("toma ID Teresina!");

  return;
};
