import { RequestHandler } from "express";
import { PessoasProviders } from "../../providers/pessoas";
import { IPessoa } from "../../models";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../shared/middlewares";
import * as yup from 'yup';

interface IBodyProps extends Omit<IPessoa, 'id'> {}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
   email : yup.string().email().required().min(3).max(150),
   cidadeId : yup.string().required().min(1).max(10),
   nomeCompleto : yup.string().required().min(3).max(150)

  })),
  
}));


export const create: RequestHandler = async (req, res)=> {
    
    const pessoa : Omit<IPessoa, 'id'> = req.body;
    const result = await PessoasProviders.create(pessoa);

    if(result instanceof Error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default: result.message
            }
        })
        return
    }

    res.status(201).json( result );
    return;
};