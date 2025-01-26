import { Request, RequestHandler } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { GetAll } from '../../database/providers/cidedes/getAll';
import { CidadesProvider } from '../../database/providers/cidedes';


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

export const getAll: RequestHandler = async (req: Request<{}, {}, {}, IQuaryProps>, res) => {
  const {filter, limit, page} = req.query;
  const parsedLimit = Number(limit);
  const parsedPage = Number(page);
  if(typeof(filter) === "string" && typeof(parsedLimit) === "number" && typeof(parsedPage) === "number" ){
    const data = await CidadesProvider.GetAll(filter, parsedLimit, parsedPage);
    res.status(StatusCodes.OK).json(data);
    return
  };
  
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Erro de dados enviados");
  
  return;
};
