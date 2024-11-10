import { ApplicationTypes } from "./ApplicationTypes";
import { Parameter } from "./Parameter";
import { Schema } from "./Schema";

type Responses = {
  [statusCode: number]: {
    description: string;
    headers?: Record<string, Parameter>;
    content?: Partial<Record<ApplicationTypes, { schema: Schema }>>;
    links?: Record<
      string,
      { operationId: string; parameters?: Record<string, any> }
    >;
  };
  default?: {
    description: string;
    headers?: Record<string, Parameter>;
    content?: Partial<Record<ApplicationTypes, { schema: Schema }>>;
  };
};

export { Responses };
