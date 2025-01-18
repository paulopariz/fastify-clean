import { Inject, Service } from 'fastify-decorators';
import { UserFindAllServiceInterface } from '../../domain/interfaces/services/user-find-all-service.interface';
import { UserRepository } from '../../infrastructure/repository/user.repository';
import { UserEntity } from '../../domain/entity/user.entity';

@Service()
export class UserFindAllService implements UserFindAllServiceInterface {
  @Inject(UserRepository)
  private readonly userRepository!: UserRepository;

  async execute(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  }
}
