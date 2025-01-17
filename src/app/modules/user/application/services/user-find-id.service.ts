import { Inject, Service } from 'fastify-decorators';
import { UserFindIdServiceInterface } from '../../domain/interfaces/services/user-find-id-service.interface';
import { UserRepository } from '../../infrastructure/repository/user.repository';
import { User } from '@prisma/client';

@Service()
export class UserFindIdService implements UserFindIdServiceInterface {
  @Inject(UserRepository)
  private readonly userRepository!: UserRepository;

  async execute(id: number): Promise<User> {
    return this.userRepository.findId(id);
  }
}
