import { ETableNames } from "../../database/ETableNames";
import { Knex } from "../../database/knex";
import { ICidade } from "../../models";

export const create = async (cidade: Omit<ICidade, 'id'>) : Promise<number | Error> => {
    
    try {
        const [result] = await Knex(ETableNames.cidade).insert(cidade).returning('id');
        if(typeof result === "object"){
            return result.id;
        } else if (typeof result === "number") {
            return result;
        };

        return new Error('Erro ao cadastrar o Registro! Not OBJECT or NUMBER');
    } catch (error) {
        console.log(error)
        return new Error('Erro ao cadastrar o Registro! Error SQL');
    }
    
};