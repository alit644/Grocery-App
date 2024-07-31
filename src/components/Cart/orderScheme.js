import { z } from "zod";

export const orderScheme = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required"),
  number: z.string().min(1, "Phone number is required"),
  address: z
    .string()
    .min(8, { message: "Address must be at least 5 characters long" }),
});
