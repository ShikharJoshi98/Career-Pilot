import { email, z } from "zod";

export const registerSchema = z.object({
    name: z.string("Name is required").min(1, "Name is required"),
    email: z.string("Email is required").email("Invalid email"),
    password: z.string("Password is required").min(1, "Password is required"),
    confirmPassword: z.string()
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"]
    }
);
  
export const loginSchema = z.object({
    email: z.string().email("Invalid Email"),
    password: z.string().min(1, "Password is required"),
})