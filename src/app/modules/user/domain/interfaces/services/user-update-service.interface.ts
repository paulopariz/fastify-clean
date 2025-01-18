/* eslint-disable no-unused-vars */
import { UserUpdateDTO } from '../../dto/user-update.dto';
import { UserEntity } from '../../entity/user.entity';

export abstract class UserUpdateServiceInterface {
  abstract execute(id: number, user: UserUpdateDTO): Promise<UserEntity>;
}
