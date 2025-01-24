import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";
describe("Cidadedes - Create", ()=>{

  it("Cria Registro", async ()=>{
    const rest1 = await testServer
    .post("/cidades")
    .send({nome:"Floriano"})


    expect(rest1.statusCode).toEqual(StatusCodes.CREATED);

  }); 
  it("Tenta Criar um registro Curto", async ()=>{
    const rest1 = await testServer
    .post("/cidades")
    .send({nome:"Fl"})


    expect(rest1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(rest1.body).toHaveProperty("errors.body.nome");

  }); 
  
});