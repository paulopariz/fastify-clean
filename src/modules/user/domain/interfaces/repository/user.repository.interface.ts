import { CreateUserDTO } from '../../dto/create-user-service.dto';

export abstract class UserRepositoryInterface {
  abstract create(data: CreateUserDTO): Promise<{ user: CreateUserDTO }>;
}
