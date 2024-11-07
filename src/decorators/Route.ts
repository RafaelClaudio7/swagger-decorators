import "reflect-metadata";
import { RouteOptions } from "../types";

export function RouteDocs(options: RouteOptions): MethodDecorator {
  return (target, propertyKey) => {
    const routes = Reflect.getMetadata("routes", target.constructor) || [];

    routes.push({
      path: options.path,
      method: options.method,
      summary: options.summary,
      description: options.description,
      handlerName: propertyKey.toString(),
      tags: options.tags || ["default"],
      parameters: options.parameters,
      requestBody: options.requestBody,
      security: options.security,
      responses: options.responses,
    });

    Reflect.defineMetadata("routes", routes, target.constructor);
  };
}
