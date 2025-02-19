import './server/shared/services/TranslationYup';
import {server} from "./server/Server";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3333;

server.listen( PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});