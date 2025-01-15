import { CreateUserDTO } from '../../domain/dto/create-user-service.dto';
import { CreateUserServiceInterface } from '../../domain/interfaces/services/create-user-service.interface';

export class UserService implements CreateUserServiceInterface {
  async create(user: CreateUserDTO): Promise<CreateUserDTO> {
    return user;
  }
}
