import { z } from "zod";

export const signUpschema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "password must be at least 8 characters.",
  }),
});

export const recuterSubmitData = {};
