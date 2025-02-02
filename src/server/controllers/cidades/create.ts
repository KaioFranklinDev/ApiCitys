import {  RequestHandler  } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { ICidade } from '../../models';
import { CidadesProvider } from '../../providers/cidedes';




interface IBodyProps extends Omit<ICidade, 'id'> {}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3).max(150),
  })),
  
}));

export const create:RequestHandler = async (req, res) => {

  const result = await CidadesProvider.create(req.body);

  if(result instanceof Error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      erros: {
        default: result.message
      }
    });
    return;
  };

  res.status(StatusCodes.CREATED).json({"criado com o ID" : result});

  return;
};
