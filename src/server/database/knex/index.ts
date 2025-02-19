import knex from "knex";
import { development, test, production } from "./env"

const getEnv = () => {
  switch (process.env.NODE_ENV) {
      case "production": return production;
      case "test": return test;

      default: return development;
  };
};

export const Knex = knex(getEnv()); 