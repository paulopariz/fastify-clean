import { CreateUserDTO } from '../../domain/dto/create-user-service.dto';
import { UserRepositoryInterface } from '../../domain/interfaces/repository/user.repository.interface';

export class UserRepository implements UserRepositoryInterface {
  async create(data: CreateUserDTO): Promise<{ user: CreateUserDTO }> {
    return { user };
  }
}
