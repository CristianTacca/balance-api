import { Router } from "express";
import { getBalanceSchema } from "../schemas";
import BalanceController from "../controllers/balance.controller";
import validateSchema from "../middlewares/validateSchema.middleware";

const balanceRouter = Router();

balanceRouter.get("", validateSchema(getBalanceSchema), BalanceController.get);

export default balanceRouter;
