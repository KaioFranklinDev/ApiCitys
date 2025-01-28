
import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { ICidade } from "../../models";
;

export const GetById = async (id:number): Promise <ICidade[] | Error> => {
    try {
        const result = await Knex(ETableNames.cidade)
        .select('*')
        .where('id', id)


        if(result.length === 0){
            return new Error("Id digitado não pertence a uma Cidade!")
        }

        return result;
    } catch (error) {
        return new Error('Erro ao consultar no DB!');
    }
};