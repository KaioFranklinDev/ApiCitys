import express, { Request, Response } from 'express';

const server = express();

server.use(express.json());

server.get('/', (req: Request, res: Response) => {
  res.send('Olá, mundo! Estou rodando em TypeScript!');
});

export { server };
