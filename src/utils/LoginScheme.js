import { z } from "zod";

export const loginScheme = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
  password: z.string().min(8, { message: "Password is required" }),
})