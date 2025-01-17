/* eslint-disable no-unused-vars */
import { UserUpdateDTO } from '../../dto/user-update.dto';

export abstract class UserUpdateServiceInterface {
  abstract execute(id: number, user: UserUpdateDTO): Promise<UserUpdateDTO>;
}
