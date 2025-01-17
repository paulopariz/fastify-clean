/* eslint-disable no-unused-vars */
import { User } from '@prisma/client';

import { UserCreateDTO } from '../../dto/user-create.dto';
import { UserUpdateDTO } from '../../dto/user-update.dto';

export abstract class UserRepositoryInterface {
  abstract findAll(): Promise<User[]>;
  abstract create(data: UserCreateDTO): Promise<UserCreateDTO>;
  abstract update(id: number, data: UserUpdateDTO): Promise<UserUpdateDTO>;
}
