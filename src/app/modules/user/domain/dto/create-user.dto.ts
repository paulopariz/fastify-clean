import { z } from 'zod';

const CreateUserDTO = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' }),
  email: z.string().email({ message: 'Invalid email format' }),
});

type CreateUserDTO = z.infer<typeof CreateUserDTO>;

export { CreateUserDTO };
