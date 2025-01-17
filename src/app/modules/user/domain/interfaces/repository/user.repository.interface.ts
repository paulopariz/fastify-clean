/* eslint-disable no-unused-vars */
import { CreateUserDTO } from '../../dto/create-user.dto';
import { User } from '@prisma/client';

export abstract class UserRepositoryInterface {
  abstract create(data: CreateUserDTO): Promise<CreateUserDTO>;
  abstract findAll(): Promise<User[]>;
}
