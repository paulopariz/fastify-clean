/* eslint-disable no-unused-vars */
import { CreateUserDTO } from '../../dto/create-user.dto';

export abstract class UserCreateServiceInterface {
  abstract execute(user: CreateUserDTO): Promise<CreateUserDTO>;
}
