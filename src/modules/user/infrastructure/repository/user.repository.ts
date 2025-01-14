import { prisma } from '../../../../infra/prisma';
import { CreateUserDTO } from '../../domain/dto/create-user-service.dto';
import { UserRepositoryInterface } from '../../domain/interfaces/repository/user.repository.interface';

export class UserRepository implements UserRepositoryInterface {
  async create(data: CreateUserDTO): Promise<{ user: CreateUserDTO }> {
    const user = await prisma.user.create({
      data,
    });

    return { user };
  }
}
