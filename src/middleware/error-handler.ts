import { Request, Response } from "express";
import { WebUtil } from "../util/web-util";
import { Logger } from "../provider/logger";
import { QueryFailedError } from "typeorm";

// @ts-ignore
export const errorHandler = function (func: any): any {
  return async (req: Request, resp: Response) => {
    Logger.info(`Request URL: ${req.url}`);
    try {
      await func(req, resp);
    } catch (e) {
      Logger.error(e.stack);
      if (e instanceof Error) {
        return WebUtil.warning(resp, e.message);
      }

      if (e instanceof Error) {
        return WebUtil.warning(resp, e.message);
      }

      if (e instanceof Error) {
        return WebUtil.error(resp);
      }

      if (e instanceof QueryFailedError) {
        Logger.error((e as any)?.sql);
      }

      return WebUtil.error(resp);
    }
  };
};
