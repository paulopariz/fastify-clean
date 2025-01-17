/* eslint-disable no-unused-vars */
import { UserEntity } from '../../entity/user.entity';

export abstract class UserDeleteServiceInterface {
  abstract execute(id: number): Promise<UserEntity>;
}
