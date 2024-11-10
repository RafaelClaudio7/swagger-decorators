import { HttpMethod } from "./HttpMethod";
import { RouteOptions } from "./RouteOptions";

type SwaggerDefinition = {
  openapi: SwaggerVersion;
  info: {
    title: string;
    version: string;
    description?: string;
    termsOfService?: string;
    contact?: {
      name?: string;
      url?: string;
      email?: string;
    };
    license?: {
      name: string;
      url?: string;
    };
  };
  paths?: Record<string, Record<HttpMethod, RouteOptions>>;
};

export { SwaggerDefinition };
