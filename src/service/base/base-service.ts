import { Express } from "express";

export class BaseService {
  app: Express;

  constructor(app) {
    this.app = app;
  }
}
