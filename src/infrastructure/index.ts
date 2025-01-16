import fastify from 'fastify';
import { registerCors } from './cors';
import { registerRoutes } from './routes';

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
