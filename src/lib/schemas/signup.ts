import { z } from "zod";

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 8 characters"),
});

type SignupFormData = z.infer<typeof signupSchema>;

export { signupSchema, type SignupFormData };
