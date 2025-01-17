import { Service } from 'fastify-decorators';
import { prisma } from '../../../../../infrastructure/prisma';

import { UserCreateDTO, UserUpdateDTO } from '../../domain/dto';
import { UserEntity } from '../../domain/entity/user.entity';

import { UserRepositoryInterface } from '../../domain/interfaces/repository/user.repository.interface';
import { NotFoundError } from 'http-errors-enhanced';

@Service()
export class UserRepository implements UserRepositoryInterface {
  async findAll(): Promise<UserEntity[]> {
    return prisma.user.findMany();
  }

  async findId(id: number): Promise<UserEntity> {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundError(`User ${id} does not exist.`);
    }

    return new UserEntity(user.id, user.name, user.email);
  }

  async create(data: UserCreateDTO): Promise<UserEntity> {
    return prisma.user.create({
      data,
    });
  }

  async update(id: number, data: UserUpdateDTO): Promise<UserEntity> {
    return prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: number): Promise<UserEntity> {
    return prisma.user.delete({
      where: { id },
    });
  }
}
