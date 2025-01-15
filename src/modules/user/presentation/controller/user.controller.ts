import { Controller, GET } from 'fastify-decorators';

@Controller({ route: '/' })
export default class FirstController {
  @GET({ url: '/hello' })
  async helloHandler() {
    return 'Hello world!';
  }

  @GET({ url: '/goodbye' })
  async goodbyeHandler() {
    return 'Bye-bye!';
  }
}
