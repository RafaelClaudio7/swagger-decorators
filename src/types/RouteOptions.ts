import { HttpMethod } from "./HttpMethod";
import { Parameter } from "./Parameter";
import { RequestBody } from "./RequestBody";
import { Responses } from "./Responses";

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

export { RouteOptions };
