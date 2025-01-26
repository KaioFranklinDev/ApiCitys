import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";

export const DeleteById = async (id: number): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.cidade)
      .where('id', '=', id)
      .del()
      ;
    if (result > 0) return;
    return new Error("Cidade não encontrada para deletação!");
  } catch (error) {
    return new Error("Erro na deletação!");
  };



  
};