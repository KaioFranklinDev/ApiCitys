import { Request, RequestHandler } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { GetAll } from '../../providers/cidedes/getAll';
import { CidadesProvider } from '../../providers/cidedes';


interface IQueryProps {
  page?: number | null;
  limit?: number | null;
  filter?: string | null;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object().shape({
    page: yup.number().notRequired().moreThan(0),
    limit: yup.number().notRequired().moreThan(0),
    filter: yup.string().notRequired(),
  })),

}));

export const getAll: RequestHandler = async (req: Request<{}, {}, {}, IQueryProps>, res) => {
  const data = await CidadesProvider.GetAll(req.query.filter || "" , req.query.limit || 10 , req.query.page || 1 );
  
  if(data instanceof Error){
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors:{
        default : data.message
      }
    });
  
    return;
  }

  res.status(StatusCodes.OK).json(data)
  return;
};
