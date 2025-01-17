import { Inject, Service } from 'fastify-decorators';

import { UserUpdateServiceInterface } from '../../domain/interfaces/services/user-update-service.interface';
import { UserRepository } from '../../infrastructure/repository/user.repository';
import { UserUpdateDTO } from '../../domain/dto';

import {
  UserCheckDuplicateEmailUseCase,
  UserIdExistsUseCase,
} from '../../use-case';

@Service()
export class UserUpdateService implements UserUpdateServiceInterface {
  @Inject(UserRepository)
  private readonly userRepository!: UserRepository;

  @Inject(UserCheckDuplicateEmailUseCase)
  private readonly userCheckDuplicateEmailUseCase!: UserCheckDuplicateEmailUseCase;

  @Inject(UserIdExistsUseCase)
  private readonly userIdExistsUseCase!: UserIdExistsUseCase;

  async execute(id: number, user: UserUpdateDTO): Promise<UserUpdateDTO> {
    await this.userIdExistsUseCase.execute(id);
    await this.userCheckDuplicateEmailUseCase.execute(user.email);

    return this.userRepository.update(id, user);
  }
}
