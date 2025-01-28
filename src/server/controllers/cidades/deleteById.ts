import { Request, RequestHandler } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { CidadesProvider } from '../../database/providers/cidedes';


interface IParamsProps {
  id?: number;
};

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),

}));

export const deleteById: RequestHandler = async (req: Request<IParamsProps>, res) => {
  if (!req.params.id) {
    res.status(StatusCodes.BAD_REQUEST).json(
      {
        erros:
        {
          default: 'O parametro "Id" é necessario!!'
        }
        ,
      });
    return;
  };

  const result = await CidadesProvider.DeleteById(req.params.id);
  if (result instanceof Error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      erros: {
        default: result.message
      }
    });
    return;
  }
  res.status(StatusCodes.OK).json({success: "Cidade apagada com sucesso!"});
  return;




};
