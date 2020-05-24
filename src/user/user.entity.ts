import { UserInterface } from './user.interface';
import {} from '@nestjs/typeorm';
import {
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  MinKey,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
@Entity()
@Unique(['username'])
@Unique(['email'])
export class User implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  //@MinKey(8)
  password: string;

  @Column()
  name: string;

  @Column()
  //@IsEmail()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
