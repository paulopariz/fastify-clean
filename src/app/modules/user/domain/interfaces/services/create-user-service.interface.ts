/* eslint-disable no-unused-vars */
import { CreateUserDTO } from '../../dto/create-user-service.dto';

export abstract class CreateUserServiceInterface {
  abstract execute(user: CreateUserDTO): Promise<CreateUserDTO>;
}
