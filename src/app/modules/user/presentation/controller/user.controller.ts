import { Controller, DELETE, GET, Inject, POST, PUT } from 'fastify-decorators';
import { FastifyRequest } from 'fastify';
import { zodToJsonSchema } from 'zod-to-json-schema';

import { UserCreateDTO, UserUpdateDTO } from '../../domain/dto';

import {
  UserFindAllService,
  UserFindIdService,
  UserCreateService,
  UserUpdateService,
  UserDeleteService,
} from '../../application/services';

import { UserEntity } from '../../domain/entity/user.entity';

@Controller({ route: '/users' })
export default class UserController {
  @Inject(UserFindAllService)
  private readonly userFindAllService!: UserFindAllService;

  @Inject(UserFindIdService)
  private readonly userFindIdService!: UserFindIdService;

  @Inject(UserCreateService)
  private readonly userCreateService!: UserCreateService;

  @Inject(UserUpdateService)
  private readonly userUpdateService!: UserUpdateService;

  @Inject(UserDeleteService)
  private readonly userDeleteService!: UserDeleteService;

  @GET('/')
  async findAll(): Promise<UserEntity[]> {
    return this.userFindAllService.execute();
  }

  @GET('/:id')
  async findId(
    req: FastifyRequest<{ Params: { id: string } }>,
  ): Promise<UserEntity> {
    const id = parseInt(req.params.id);
    return this.userFindIdService.execute(id);
  }

  @POST('/', { schema: { body: zodToJsonSchema(UserCreateDTO) } })
  async create(req: FastifyRequest): Promise<UserCreateDTO> {
    const user = req.body as UserCreateDTO;
    return this.userCreateService.execute(user);
  }

  @PUT('/:id', { schema: { body: zodToJsonSchema(UserUpdateDTO) } })
  async update(
    req: FastifyRequest<{ Params: { id: string } }>,
  ): Promise<UserUpdateDTO> {
    const userId = parseInt(req.params.id);
    const user = req.body as UserUpdateDTO;

    return this.userUpdateService.execute(userId, user);
  }

  @DELETE('/:id')
  async delete(
    req: FastifyRequest<{ Params: { id: string } }>,
  ): Promise<{ success: boolean }> {
    const id = parseInt(req.params.id);

    await this.userDeleteService.execute(id);

    return { success: true };
  }
}
