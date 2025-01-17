import { z } from 'zod';

const UserCreateDTO = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' }),
  email: z.string().email({ message: 'Invalid email format' }),
});

type UserCreateDTO = z.infer<typeof UserCreateDTO>;

export { UserCreateDTO };
