/* eslint-disable no-unused-vars */
import { UserCreateDTO } from '../../dto/user-create.dto';
import { UserEntity } from '../../entity/user.entity';

export abstract class UserCreateServiceInterface {
  abstract execute(user: UserCreateDTO): Promise<UserEntity>;
}
