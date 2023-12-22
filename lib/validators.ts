import { z } from "zod";

const voteOptionsValidator = z.object({
  name: z.string().min(1, "Poll option can't be empty"),
});

export const voteValidator = z.object({
  subject: z
    .string({
      invalid_type_error: "Poll Subject is required",
    })
    .min(10),
  options: z
    .array(voteOptionsValidator, {
      invalid_type_error: "You must put some options",
    })
    .max(6)
    .min(3),
});

export const userValidator = z.object({
  name: z.string().min(3, "username can't be empty"),
  password: z.string().min(3, "password can't be empty"),
  confirm_password: z.string().min(3, "confirm password can't be empty"),
  dob: z.string().min(6, "Date of birth can't be empty"),
  email: z.string().email("field is not valid email"),
});

export const loginValidator = z.object({
  email: z.string().email("Field must be valid email"),
  password: z.string().min(3, "Password field is required"),
});
