import {  Request, RequestHandler  } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';


interface IQuaryProps {
    page?: number | null;
    limit?: number | null;
    filter?: string | null;
  }

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQuaryProps>(yup.object().shape({
    page: yup.number().notRequired().moreThan(0),
    limit: yup.number().notRequired().moreThan(0),
    filter: yup.string().notRequired(),
  })),
  
}));

export const getAll:RequestHandler = async (req:Request<{},{},{}, IQuaryProps>, res) => {
  console.log(req.query);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("toma Teresina!");

  return;
};
