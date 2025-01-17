import { Inject, Service } from 'fastify-decorators';
import { UserFindAllServiceInterface } from '../../domain/interfaces/services/user-find-all-service.interface';
import { UserRepository } from '../../infrastructure/repository/user.repository';
import { User } from '@prisma/client';

@Service()
export class UserFindAllService implements UserFindAllServiceInterface {
  @Inject(UserRepository)
  userRepository!: UserRepository;

  async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
