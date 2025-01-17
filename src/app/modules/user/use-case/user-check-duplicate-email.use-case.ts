import { Service } from 'fastify-decorators';
import { prisma } from '../../../../infrastructure/prisma';
import { ConflictError } from 'http-errors-enhanced';

@Service()
export class UserCheckDuplicateEmailUseCase {
  async execute(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) throw new ConflictError('User already exists.');

    return null;
  }
}
