/* eslint-disable no-unused-vars */
import { UserCreateDTO, UserUpdateDTO } from '../../dto';
import { UserEntity } from '../../entity/user.entity';

export abstract class UserRepositoryInterface {
  abstract findAll(): Promise<UserEntity[]>;
  abstract findId(id: number): Promise<UserEntity>;
  abstract create(data: UserCreateDTO): Promise<UserEntity>;
  abstract update(id: number, data: UserUpdateDTO): Promise<UserEntity>;
  abstract delete(id: number): Promise<UserEntity>;
}
