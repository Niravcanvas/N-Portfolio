import "server-only";
import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const contactMessageSchema = new Schema({
  name: { type: String, required: true, maxlength: 120 },
  email: { type: String, required: true, maxlength: 200 },
  subject: { type: String, required: true, maxlength: 200 },
  message: { type: String, required: true, maxlength: 5000 },
  ipHash: { type: String, maxlength: 64 }, // salted hash only — never a raw IP
  userAgent: { type: String, maxlength: 256 },
  createdAt: { type: Date, default: Date.now },
});

// Auto-expire stored messages after 180 days (PII retention bound).
contactMessageSchema.index(
  { createdAt: 1 },
  { expireAfterSeconds: 60 * 60 * 24 * 180 },
);

export type ContactMessage = InferSchemaType<typeof contactMessageSchema>;

export const ContactMessageModel: Model<ContactMessage> =
  (mongoose.models.ContactMessage as Model<ContactMessage>) ??
  mongoose.model<ContactMessage>("ContactMessage", contactMessageSchema);

export { contactMessageSchema };
