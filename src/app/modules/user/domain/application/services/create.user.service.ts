import { CreateUserDTO } from '../../dto/create-user-service.dto';
import { CreateUserServiceInterface } from '../../interfaces/services/create-user-service.interface';

export class UserService implements CreateUserServiceInterface {
  async execute(user: CreateUserDTO): Promise<CreateUserDTO> {
    return user;
  }
}
