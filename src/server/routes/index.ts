import {  Router } from "express";
import { Request, Response } from 'express';
import { CidadesController } from "../controllers";



const router = Router();

router.get('/', (_: Request, res: Response) => {
  res.send('Olá, mundo! Estou rodando em TypeScript!');
});

router.post('/cidades', CidadesController.crateBodyValidator, CidadesController.create);

export { router };