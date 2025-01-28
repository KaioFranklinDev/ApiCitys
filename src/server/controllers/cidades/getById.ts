import {  Request, RequestHandler  } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { parse } from 'path';
import { CidadesProvider } from '../../database/providers/cidedes';


interface IQuaryParams {
    id?: number ;
};

export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IQuaryParams>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
  
}));

export const getById:RequestHandler = async (req:Request<IQuaryParams>, res) => {

  
  const id = Number(req.params.id);

  if(typeof id !== "number"){
    res.status(StatusCodes.BAD_REQUEST).send("Erro na validação");
    return;
  }

  const response = await CidadesProvider.GetById(id)
  
  if(response instanceof Error){
    res.status(StatusCodes.BAD_REQUEST).send(response.message);
    return
  }

  res.status(StatusCodes.OK).send(response);
  return;
};
