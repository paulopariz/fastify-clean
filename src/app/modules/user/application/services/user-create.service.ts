import { Inject, Service } from 'fastify-decorators';
import { UserCreateServiceInterface } from '../../domain/interfaces/services/user-create-service.interface';
import { UserRepository } from '../../infrastructure/repository/user.repository';
import { UserCreateDTO } from '../../domain/dto';
import { UserCheckDuplicateEmailUseCase } from '../../use-case';
import { UserEntity } from '../../domain/entity/user.entity';

@Service()
export class UserCreateService implements UserCreateServiceInterface {
  @Inject(UserRepository)
  private readonly userRepository!: UserRepository;

  @Inject(UserCheckDuplicateEmailUseCase)
  private readonly userCheckDuplicateEmailUseCase!: UserCheckDuplicateEmailUseCase;

  async execute(user: UserCreateDTO): Promise<UserEntity> {
    await this.userCheckDuplicateEmailUseCase.execute(user.email);

    return this.userRepository.create(user);
  }
}
