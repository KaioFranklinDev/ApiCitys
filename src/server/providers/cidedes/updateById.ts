
import { ETableNames } from "../../database/ETableNames";
import { Knex } from "../../database/knex";
import { ICidade } from "../../models";
;

export const UpdateById = async (id:number, cidade: Omit<ICidade, 'id'>): Promise < void | Error> => {
    try {

        console.log(cidade)

        const result = await Knex(ETableNames.cidade)
        .update(cidade)
        .where('id', '=', id)
        


        if(result > 0) return;

        return new Error('Erro ao atualizar registro!');

    } catch (error) {
        console.log(error)
        return new Error('Erro ao atualizar registro!');
    }
};