import { Inject, Service } from 'fastify-decorators';
import { CreateUserServiceInterface } from '../../domain/interfaces/services/create-user-service.interface';
import { UserRepository } from '../../infrastructure/repository/user.repository';
import { CreateUserDTO } from '../../domain/dto/create-user.dto';
import { UserCheckDuplicateEmailUseCase } from '../../use-case/user-check-duplicate-email.use-case';

@Service()
export class UserService implements CreateUserServiceInterface {
  @Inject(UserRepository)
  userRepository!: UserRepository;

  @Inject(UserCheckDuplicateEmailUseCase)
  userCheckDuplicateEmailUseCase!: UserCheckDuplicateEmailUseCase;

  async execute(user: CreateUserDTO): Promise<CreateUserDTO> {
    await this.userCheckDuplicateEmailUseCase.execute(user.email);

    return this.userRepository.create(user);
  }
}
