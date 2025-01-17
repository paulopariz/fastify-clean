import { Inject, Service } from 'fastify-decorators';
import { UserCreateServiceInterface } from '../../domain/interfaces/services/user-create-service.interface';
import { UserRepository } from '../../infrastructure/repository/user.repository';
import { UserCreateDTO } from '../../domain/dto/user-create.dto';
import { UserCheckDuplicateEmailUseCase } from '../../use-case/user-check-duplicate-email.use-case';

@Service()
export class UserCreateService implements UserCreateServiceInterface {
  @Inject(UserRepository)
  userRepository!: UserRepository;

  @Inject(UserCheckDuplicateEmailUseCase)
  userCheckDuplicateEmailUseCase!: UserCheckDuplicateEmailUseCase;

  async execute(user: UserCreateDTO): Promise<UserCreateDTO> {
    await this.userCheckDuplicateEmailUseCase.execute(user.email);

    return this.userRepository.create(user);
  }
}
