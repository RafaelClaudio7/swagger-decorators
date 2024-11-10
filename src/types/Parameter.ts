import { Schema } from "./Schema";

type Parameter = {
  in: "header" | "query" | "path" | "cookie";
  name: string;
  required?: boolean;
  schema?: Schema;
  description?: string;
  deprecated?: boolean;
  nullable?: boolean;
  allowEmptyValue?: boolean;
};

export { Parameter };
