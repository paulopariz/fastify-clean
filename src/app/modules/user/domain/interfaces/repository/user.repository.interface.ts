/* eslint-disable no-unused-vars */
import { CreateUserDTO } from '../../dto/create-user.dto';

export abstract class UserRepositoryInterface {
  abstract create(data: CreateUserDTO): Promise<CreateUserDTO>;
}
