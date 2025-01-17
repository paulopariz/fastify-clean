import { Service } from 'fastify-decorators';
import { prisma } from '../../../../../infrastructure/prisma';

import { User } from '@prisma/client';

import { UserCreateDTO } from '../../domain/dto/user-create.dto';
import { UserUpdateDTO } from '../../domain/dto/user-update.dto';

import { UserRepositoryInterface } from '../../domain/interfaces/repository/user.repository.interface';

@Service()
export class UserRepository implements UserRepositoryInterface {
  async findAll(): Promise<User[]> {
    return prisma.user.findMany();
  }

  async create(data: UserCreateDTO): Promise<UserCreateDTO> {
    return prisma.user.create({
      data,
    });
  }

  async update(id: number, data: UserUpdateDTO): Promise<UserUpdateDTO> {
    return prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }
}
