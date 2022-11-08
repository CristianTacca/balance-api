import { Express } from "express";
import balanceRouter from "./balance.routes";

export const appRoutes = (app: Express) => {
  app.use("/", balanceRouter);
};
