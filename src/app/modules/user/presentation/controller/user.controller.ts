import { Controller, GET, Inject, POST } from 'fastify-decorators';
import { FastifyRequest } from 'fastify';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { CreateUserDTO } from '../../domain/dto/create-user.dto';
import { UserCreateService } from '../../application/services/create-user.service';
import { UserFindAllService } from '../../application/services/user-find-all.service';

@Controller({ route: '/users' })
export default class UserController {
  @Inject(UserCreateService)
  userCreateService!: UserCreateService;

  @Inject(UserFindAllService)
  userFindAllService!: UserFindAllService;

  @GET('/')
  async findAll() {
    return this.userFindAllService.execute();
  }

  @POST('/', { schema: { body: zodToJsonSchema(CreateUserDTO) } })
  async create(req: FastifyRequest) {
    const user = req.body as CreateUserDTO;
    return this.userCreateService.execute(user);
  }
}
