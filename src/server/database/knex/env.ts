import { Knex } from "knex";

export const development: Knex.Config = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: '../localStorage/devDB.sqlite',
  },
  migrations: {
    directory: '../migrations',
  },
  seeds: {
    directory: '../seeds',
  },
  pool: {
    afterCreate: (connection: any, done: Function) => {
      connection.run('PRAGMA foregin_keys = ON');
      done();
    },
  },
};
export const test: Knex.Config = {
  ...development,
  connection: ':memory:',
};

export const production: Knex.Config = {
  ...development,
};