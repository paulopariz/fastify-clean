import { Controller, Inject, POST } from 'fastify-decorators';
import { FastifyRequest } from 'fastify';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { CreateUserDTO } from '../../domain/dto/create-user.dto';
import { UserService } from '../../application/services/create.user.service';

@Controller({ route: '/users' })
export default class UserController {
  @Inject(UserService) userService!: UserService;

  @POST('/', { schema: { body: zodToJsonSchema(CreateUserDTO) } })
  async create(req: FastifyRequest) {
    const user = req.body as CreateUserDTO;
    return this.userService.execute(user);
  }
}
