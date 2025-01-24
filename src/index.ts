import './server/shared/services/TranslationYup';
import {server} from "./server/Server";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

server.listen( PORT || "3333" , () => {
  console.log(`Servidor rodando na porta ${PORT || 3333}`);
});