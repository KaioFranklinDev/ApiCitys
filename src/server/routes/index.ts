import {  Router } from "express";
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from "../controllers";



const router = Router();

router.get('/', (_: Request, res: Response) => {
  res.send('Olá, mundo! Estou rodando em TypeScript!');
});

router.post('/login', (req: Request, res: Response) => {
  console.log(req.body);
  res.status(StatusCodes.CREATED).json(req.body);
});

router.post('/cidades', (req: Request, res: Response)=> {
  CidadesController.create(req, res);
});

export { router };