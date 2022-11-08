import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

interface IUserRepo {
  findOne: (payload: object) => Promise<User | null>;
}

class UserRepository implements IUserRepo {
  private repo: Repository<User>;

  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }

  findOne = async (payload: object) => {
    return this.repo.findOneBy({ ...payload });
  };
}

export default new UserRepository();
