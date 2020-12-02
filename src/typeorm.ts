import * as path from "path";
import { Express } from "express";
import { AppConfig } from "./provider/app-config";
import { createConnection } from "typeorm";

const isDev = () => {
  return process.env.NODE_ENV === "development";
};

export const initTypeOrm = async (app: Express) => {
  const config = AppConfig.getConfig();

  let { database, host, port, username, password, logging } = config.mysql;

  await createConnection({
    type: "mysql",
    database,
    host,
    port,
    username,
    password,
    logging,
    entities: [path.resolve(__dirname, `./entity/*.${isDev() ? "ts" : "js"}`)],
    timezone: "+08:00",
  });
};
