import fastify from 'fastify';
import { config } from 'dotenv';

import { registerCors } from './cors';
import { registerRoutes } from './routes';

config();

export const startServer = async () => {
  const app = fastify();

  await registerCors(app);
  await registerRoutes(app);

  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3333;

  try {
    await app.listen({ port: PORT });
    console.log(`Server is running on http://localhos:${PORT}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};
