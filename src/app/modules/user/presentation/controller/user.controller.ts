import { Controller, GET, Inject, POST, PUT } from 'fastify-decorators';
import { FastifyRequest } from 'fastify';
import { zodToJsonSchema } from 'zod-to-json-schema';

import { UserCreateDTO } from '../../domain/dto/user-create.dto';
import { UserUpdateDTO } from '../../domain/dto/user-update.dto';

import { UserFindAllService } from '../../application/services/user-find-all.service';
import { UserCreateService } from '../../application/services/create-user.service';
import { UserUpdateService } from '../../application/services/user-update.service';

@Controller({ route: '/users' })
export default class UserController {
  @Inject(UserFindAllService)
  userFindAllService!: UserFindAllService;

  @Inject(UserCreateService)
  userCreateService!: UserCreateService;

  @Inject(UserUpdateService)
  userUpdateService!: UserUpdateService;

  @GET('/')
  async findAll() {
    return this.userFindAllService.execute();
  }

  @POST('/', { schema: { body: zodToJsonSchema(UserCreateDTO) } })
  async create(req: FastifyRequest) {
    const user = req.body as UserCreateDTO;
    return this.userCreateService.execute(user);
  }

  @PUT('/:id', { schema: { body: zodToJsonSchema(UserUpdateDTO) } })
  async update(req: FastifyRequest<{ Params: { id: string } }>) {
    const userId = parseInt(req.params.id);
    const user = req.body as UserUpdateDTO;

    return this.userUpdateService.execute(userId, user);
  }
}
