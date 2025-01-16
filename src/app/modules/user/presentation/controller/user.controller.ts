import { Controller, POST } from 'fastify-decorators';
import { CreateUserDTO } from '../../domain/dto/create-user-service.dto';
import { FastifyRequest } from 'fastify';
import { zodToJsonSchema } from 'zod-to-json-schema';

@Controller({ route: '/users' })
export default class UserController {
  @POST('/', { schema: { body: zodToJsonSchema(CreateUserDTO) } })
  async create(req: FastifyRequest) {
    const user = req.body as CreateUserDTO;

    console.log({ user });

    return { user };
  }
}
