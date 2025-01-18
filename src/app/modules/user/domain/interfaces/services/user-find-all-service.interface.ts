/* eslint-disable no-unused-vars */
import { UserEntity } from '../../entity/user.entity';

export abstract class UserFindAllServiceInterface {
  abstract execute(): Promise<UserEntity[]>;
}
