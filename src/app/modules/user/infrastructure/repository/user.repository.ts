import { Service } from 'fastify-decorators';
import { prisma } from '../../../../../infrastructure/prisma';
import { CreateUserDTO } from '../../domain/dto/create-user.dto';
import { UserRepositoryInterface } from '../../domain/interfaces/repository/user.repository.interface';

@Service()
export class UserRepository implements UserRepositoryInterface {
  async create(data: CreateUserDTO): Promise<CreateUserDTO> {
    return prisma.user.create({
      data,
    });
  }
}
