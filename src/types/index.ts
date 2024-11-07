type SwaggerVersion = "3.0.0" | "2.0";

type PrimitiveTypes =
  | "string"
  | "number"
  | "boolean"
  | "null"
  | "array"
  | "object"
  | "integer"
  | "file";

type HttpMethod = "get" | "post" | "put" | "delete" | "patch" | "options";

type ApplicationTypes =
  | "application/json"
  | "application/xml"
  | "application/x-www-form-urlencoded";

type Schema = {
  type: PrimitiveTypes;
  properties?: Record<string, Schema>;
  items?: Schema;
  example?: any;
};

type Parameter = {
  in: "header" | "query" | "path" | "cookie";
  name: string;
  required?: boolean;
  schema: {
    type: PrimitiveTypes;
    example?: any;
  };
};

type RequestBody = {
  content: Partial<Record<ApplicationTypes, { schema: Schema }>>;
};

type Security = {
  [key: string]: string[];
};

type Responses = {
  [statusCode: number]: {
    description: string;
    content?: Partial<Record<ApplicationTypes, { schema: Schema }>>;
  };
};

type RouteOptions = {
  path: string;
  summary: string;
  description: string;
  method: HttpMethod;
  tags?: string[];
  parameters?: Parameter[];
  requestBody?: RequestBody;
  security?: Security[];
  responses?: Responses;
};

type SwaggerDefinition = {
  openapi: SwaggerVersion;
  info: {
    title: string;
    version: string;
  };
  paths?: Record<string, Record<HttpMethod, RouteOptions>>;
};

export { RouteOptions, SwaggerDefinition };
