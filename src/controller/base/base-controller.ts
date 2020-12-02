import { Express } from "express";

export class BaseController {
  app: Express;

  constructor(app) {
    this.app = app;
  }
}
