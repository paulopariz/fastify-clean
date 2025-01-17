import { Inject, Service } from 'fastify-decorators';
import { UserUpdateServiceInterface } from '../../domain/interfaces/services/user-update-service.interface';
import { UserRepository } from '../../infrastructure/repository/user.repository';
import { UserUpdateDTO } from '../../domain/dto/user-update.dto';
import { UserCheckDuplicateEmailUseCase } from '../../use-case/user-check-duplicate-email.use-case';

@Service()
export class UserUpdateService implements UserUpdateServiceInterface {
  @Inject(UserRepository)
  userRepository!: UserRepository;

  @Inject(UserCheckDuplicateEmailUseCase)
  userCheckDuplicateEmailUseCase!: UserCheckDuplicateEmailUseCase;

  async execute(id: number, user: UserUpdateDTO): Promise<UserUpdateDTO> {
    await this.userCheckDuplicateEmailUseCase.execute(user.email);

    return this.userRepository.update(id, user);
  }
}
