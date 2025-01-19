import {server} from "./server/Server"
require("dotenv/config")

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });