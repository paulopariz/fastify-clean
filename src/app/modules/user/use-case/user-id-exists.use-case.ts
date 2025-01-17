import { Service } from 'fastify-decorators';
import { prisma } from '../../../../infrastructure/prisma';
import { NotFoundError } from 'http-errors-enhanced';

@Service()
export class UserIdExistsUseCase {
  async execute(userId: number): Promise<void> {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new NotFoundError(`User ${userId} does not exist.`);
    }
  }
}
