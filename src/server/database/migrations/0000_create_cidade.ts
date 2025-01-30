import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
    .createTable(ETableNames.cidade, table =>{
        table.bigIncrements("id").primary().index();
        table.string("nome", 150).checkLength('<=', 150).index().notNullable();

        table.comment('Tabala usada pra armazenar cidades do sitema!');
    })
    .then(()=>{
        console.log(`# Created table ${ETableNames.cidade}`);
    });
};

export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTable(ETableNames.cidade)
    .then(()=>{
        console.log(`# Deleted table ${ETableNames.cidade}`);
    });
};