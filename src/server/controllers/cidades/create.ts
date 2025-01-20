import { Request, Response } from 'express';
import {  StatusCodes } from 'http-status-codes';

interface iCidades{
  name:string
}

export const create = (req: Request<{}, {}, iCidades>, res: Response)=>{

  return res.status(StatusCodes.CREATED).json(req.body.name);
  
};