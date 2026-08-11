import { z } from "zod";

export const leadIntentSchema = z.enum(["trial", "info", "birthday"]);

export const leadSchema = z.object({
  intent: leadIntentSchema,
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(7).max(40),
  message: z.string().trim().max(2000).optional().default(""),
});

export type LeadInput = z.infer<typeof leadSchema>;
export type LeadIntent = z.infer<typeof leadIntentSchema>;

export const intentLabels: Record<LeadIntent, string> = {
  trial: "Reserve / trial signup",
  info: "Request information",
  birthday: "Birthday party request",
};
