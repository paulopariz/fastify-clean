import fastify from 'fastify';
import { registerCors } from '../infra/cors';
import { registerRoutes } from '../infra/routes';

export const startServer = async () => {
  const app = fastify();

  await registerCors(app);
  await registerRoutes(app);

  try {
    await app.listen({ port: 3333 });
    console.log('Server is running on http://localhost:3333');
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};
