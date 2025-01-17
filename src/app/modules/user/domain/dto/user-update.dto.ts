import { z } from 'zod';

const UserUpdateDTO = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' }),
  email: z.string().email({ message: 'Invalid email format' }),
});

type UserUpdateDTO = z.infer<typeof UserUpdateDTO>;

export { UserUpdateDTO };
