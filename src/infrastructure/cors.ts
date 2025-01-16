import { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';

export const registerCors = async (app: FastifyInstance) => {
  await app.register(cors);
};
