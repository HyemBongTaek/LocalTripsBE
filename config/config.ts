import * as dotenv from "dotenv";
dotenv.config();

type Config = {
  username: string;
  password: string;
  database: string;
  host: string;
  [key: string]: string | boolean;
};

interface IConfigGroup {
  development: Config;
  test: Config;
  production: Config;
}

const config: IConfigGroup = {
  development: {
    username: process.env.DB_NAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB!,
    host: process.env.DB_HOST!,
    dialect: "mysql",
    timezone: "+09:00",
  },
  test: {
    username: process.env.DB_NAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB!,
    host: process.env.DB_HOST!,
    dialect: "mysql",
    timezone: "+09:00",
  },
  production: {
    username: process.env.DB_NAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB!,
    host: process.env.DB_HOST!,
    dialect: "mysql",
    timezone: "+09:00",
    logging: false,
  },
};

export default config;
