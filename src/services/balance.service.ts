import { Request } from "express";
import { client } from "../redis/index";
import { AppError } from "../errors/appError";
import userRepository from "../repositories/user.repository";

class BalanceService {
  static searchBalance = async (req: Request) => {
    const { id } = req.body;

    await client.connect();

    const balance = await client.get(id.toString());

    if (!balance) {
      const user = await userRepository.findOne({ id: id });

      if (!user) {
        throw new AppError(401, "User does not exist.");
      }
      const balanceDB = user.balance.toString();

      await client.set(id.toString(), balanceDB.toString(), {
        EX: 300,
        NX: true,
      });
      await client.disconnect();

      return user.balance;
    } else {
      await client.disconnect();

      return balance;
    }
  };
}

export default BalanceService;
