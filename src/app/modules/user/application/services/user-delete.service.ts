import { Inject, Service } from 'fastify-decorators';
import { UserDeleteServiceInterface } from '../../domain/interfaces/services/user-delete-service.interface';
import { UserRepository } from '../../infrastructure/repository/user.repository';
import { UserEntity } from '../../domain/entity/user.entity';
import { UserIdExistsUseCase } from '../../use-case';

@Service()
export class UserDeleteService implements UserDeleteServiceInterface {
  @Inject(UserRepository)
  private readonly userRepository!: UserRepository;

  @Inject(UserIdExistsUseCase)
  private readonly userIdExistsUseCase!: UserIdExistsUseCase;

  async execute(id: number): Promise<UserEntity> {
    await this.userIdExistsUseCase.execute(id);
    return this.userRepository.delete(id);
  }
}
