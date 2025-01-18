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
    const { id } = req.params;
    return this.userFindIdService.execute(Number(id));
  }

  @POST('/', { schema: { body: zodToJsonSchema(UserCreateDTO) } })
  async create(req: FastifyRequest): Promise<UserEntity> {
    const user = req.body as UserCreateDTO;
    return this.userCreateService.execute(user);
  }

  @PUT('/:id', { schema: { body: zodToJsonSchema(UserUpdateDTO) } })
  async update(
    req: FastifyRequest<{ Params: { id: string } }>,
  ): Promise<UserEntity> {
    const { id } = req.params;
    const user = req.body as UserUpdateDTO;

    return this.userUpdateService.execute(Number(id), user);
  }

  @DELETE('/:id')
  async delete(
    req: FastifyRequest<{ Params: { id: string } }>,
  ): Promise<{ success: boolean }> {
    const { id } = req.params;

    await this.userDeleteService.execute(Number(id));

    return { success: true };
  }
}
