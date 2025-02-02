import {  Router } from "express";
import { Request, Response } from 'express';
import { CidadesController } from "../controllers";
import { PessoasControllers } from "../controllers/pessoas";



const router = Router();

router.get('/', (_: Request, res: Response) => {
  res.send('Olá, mundo! Estou rodando em TypeScript!');
});

router.post('/cidades', CidadesController.createValidation, CidadesController.create);
router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById);
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById);
router.delete('/cidades/:id', CidadesController.deleteByIdValidation, CidadesController.deleteById);

router.post('/pessoas',PessoasControllers.createValidation, PessoasControllers.create);

export { router };