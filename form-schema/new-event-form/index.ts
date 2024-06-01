import { z } from "zod";

export const NewEventFormSchema = z.object({
  eventName: z.string().min(1, "This field is required"),
  eventCompanyName: z.string().min(1, "This field is required"),
  eventDescription: z.string().min(1, "This field is required"),
  eventDate: z.string().min(1, "This field is required"),
  eventTime: z.string().min(1, "This field is required"),
  eventLocation: z.string().min(1, "This field is required"),
  eventLink: z.string().min(1, "This field is required"),
});
