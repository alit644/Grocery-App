import { z } from "zod";

export const sigUpScheme = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email(),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number is required" })
    .regex(/^\+?[0-9]{10,15}$/, {
      message: "Phone number is invalid",
    }),
  password: z.string().min(8, { message: "Password is required" }),
});
