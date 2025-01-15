import { FastifyInstance } from 'fastify';
import { bootstrap } from 'fastify-decorators';
import { resolve } from 'path';

export const registerRoutes = async (app: FastifyInstance) => {
  await app.register(bootstrap, {
    directory: resolve(__dirname, '../modules'),
    mask: /\.controller\.(t|j)s$/,
  });
};
