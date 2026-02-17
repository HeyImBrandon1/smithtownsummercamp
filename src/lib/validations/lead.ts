import { z } from "zod";

export const leadSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(1, "Phone number is required"),
  source: z.string().min(1, "Please tell us how you heard about us"),
  childrenCount: z.string().min(1, "Please select number of children"),
});

export type LeadSchema = z.infer<typeof leadSchema>;
