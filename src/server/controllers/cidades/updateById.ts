import { Request, RequestHandler } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { ICidade } from '../../database/models';
import { CidadesProvider } from '../../database/providers/cidedes';


interface IParamsProps {
  id?: number;
};

interface IBodyProps extends Omit<ICidade, 'id'> { };




export const updateByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),

}));

export const updateById: RequestHandler = async (req: Request<IParamsProps, {}, IBodyProps>, res) => {

  const id = Number(req.params.id);
  const nome = req.body.nome;

  if (!req.params.id || !req.body.nome) {
    res.status(StatusCodes.BAD_REQUEST).send("Parametro ou Campo falatando!");
    return;
  }

  const result = await CidadesProvider.UpdateById(req.params.id , req.body);

  if (result instanceof Error) {
    res.status(StatusCodes.BAD_REQUEST).send(result.message);
    return
  }

  res.status(StatusCodes.NO_CONTENT).send(result);
  return;
};
