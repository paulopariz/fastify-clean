/* eslint-disable no-unused-vars */
import { User } from '@prisma/client';

export abstract class UserFindAllServiceInterface {
  abstract execute(): Promise<User[]>;
}
