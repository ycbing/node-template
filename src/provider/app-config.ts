import * as fs from "fs";

interface IAppConfig {
  version: string;
  mysql: {
    database: string;
    host: string;
    port: number;
    username: string;
    password: string;
    logging: boolean;
  };
}

export class AppConfig {
  private static appConfig: IAppConfig;

  public static loadJsonFile(path: string) {
    this.appConfig = JSON.parse(fs.readFileSync(path).toString("utf8"));
    console.log("load appConfig success");
  }

  public static getConfig(): IAppConfig {
    return this.appConfig;
  }
}
