import Logger from "../logs";
import { Request, Response } from "express";
import BalanceService from "../services/balance.service";
import { AppError, handleError } from "../errors/appError";

class BalanceController {
  static get = async (req: Request, res: Response) => {
    try {
      const balance = await BalanceService.searchBalance(req);

      Logger.info({ user: req.body, balance: balance });
      return res.status(201).json({ accountBalance: "R$" + balance });
    } catch (error) {
      if (error instanceof AppError) {
        Logger.error(error);
        handleError(error, res);
      }
    }
  };
}

export default BalanceController;
