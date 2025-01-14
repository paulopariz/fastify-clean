import { CreateUserDTO } from '../../dto/create-user-service.dto';

export abstract class CreateUserServiceInterface {
  abstract create(user: CreateUserDTO): Promise<CreateUserDTO>;
}
