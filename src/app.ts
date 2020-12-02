import * as express from "express";
import * as path from "path";
import * as cookieParser from "cookie-parser";
import { Router } from "./router/router";
import { AppConfig } from "./provider/app-config";
import { initTypeOrm } from "./typeorm";

const run = async () => {
  AppConfig.loadJsonFile(path.resolve(__dirname, "../config/config.json"));

  const app = express();

  const port = 3000;

  await initTypeOrm(app);

  app.use(cookieParser());

  app.use(
    express.json({
      limit: "1024MB",
    })
  );

  app.use(
    express.urlencoded({
      extended: true,
      limit: "1024MB",
    })
  );

  Router(app);

  app.listen(port, () => {
    console.log("server start success, listen port 3000......");
  });
};

run();
