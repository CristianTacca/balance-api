import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import BalanceService from "../services/balance.service";

class BalanceController {
  static get = async (req: Request, res: Response) => {
    try {
      const balance = await BalanceService.searchBalance(req);

      return res.status(201).json({ accountBalance: "R$" + balance });
    } catch (error) {
      if (error instanceof AppError) {
        handleError(error, res);
      }
    }
  };
}

export default BalanceController;
