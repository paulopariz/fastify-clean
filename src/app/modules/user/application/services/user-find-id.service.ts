import { Inject, Service } from 'fastify-decorators';
import { UserFindIdServiceInterface } from '../../domain/interfaces/services/user-find-id-service.interface';
import { UserRepository } from '../../infrastructure/repository/user.repository';
import { UserEntity } from '../../domain/entity/user.entity';

@Service()
export class UserFindIdService implements UserFindIdServiceInterface {
  @Inject(UserRepository)
  private readonly userRepository!: UserRepository;

  async execute(id: number): Promise<UserEntity> {
    return this.userRepository.findId(id);
  }
}
