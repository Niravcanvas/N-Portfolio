import { z } from "zod";

/**
 * Shared contact-form schema — imported by both the client form (instant
 * feedback) and the API route (authoritative validation). Client-safe: it
 * imports nothing server-only.
 *
 * `company` is a honeypot: real users never see or fill it. A non-empty value
 * is treated as a bot and silently discarded by the API.
 */
export const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(200),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(5000),
  company: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof ContactSchema>;
