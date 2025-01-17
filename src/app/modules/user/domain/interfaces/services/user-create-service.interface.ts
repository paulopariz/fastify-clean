/* eslint-disable no-unused-vars */
import { UserCreateDTO } from '../../dto/user-create.dto';

export abstract class UserCreateServiceInterface {
  abstract execute(user: UserCreateDTO): Promise<UserCreateDTO>;
}
