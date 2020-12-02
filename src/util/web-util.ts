import { Response } from "express";

export class WebUtil {
  static success(resp: Response) {
    resp.status(200).json({
      code: 200,
      data: "success",
    });
  }

  static warning(resp: Response, message: string) {
    resp.status(200).json({
      code: -1,
      message,
    });
  }

  static error(resp: Response, message?: string) {
    resp.status(500).json({
      code: -1,
      message: message || "Internal Server Error",
    });
  }

  static result<T>(resp: Response, data: T) {
    resp.status(200).json({
      code: 200,
      data,
    });
  }

  static userNoLogin(resp: Response) {
    resp.status(401).json({
      code: -1,
      message: "Unauthorized",
    });
  }

  static userNoAuthority(resp: Response) {
    resp.status(403).json({
      code: -1,
      message: "Unauthorized",
    });
  }
}
