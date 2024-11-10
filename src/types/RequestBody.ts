import { ApplicationTypes } from "./ApplicationTypes";
import { Schema } from "./Schema";

type RequestBody = {
  content: Partial<
    Record<ApplicationTypes, { schema: Schema; examples?: Record<string, any> }>
  >;
  required?: boolean;
};

export { RequestBody };
