import { NewEventFormSchema } from "@/form-schema/new-event-form";
import { z } from "zod";

export type NewEventFormFieldsType = {
  fieldName: keyof z.infer<typeof NewEventFormSchema>;
  fieldType: "textarea" | "text" | "number" | "date" | "time";
  placeholder: string;
  isRequired: boolean;
};
