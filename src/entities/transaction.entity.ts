import { User } from "./user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity({ name: "transaction", synchronize: false })
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(() => User, { eager: true, cascade: true })
  user: User;
}
