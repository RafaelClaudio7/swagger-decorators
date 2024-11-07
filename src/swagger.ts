import * as swaggerJsdoc from "swagger-jsdoc";
import { RouteOptions, SwaggerDefinition } from "./types";

export function generateSwaggerSpec(
  controllers: any[],
  options: SwaggerDefinition
) {
  const paths: any = {};

  controllers.forEach((controller) => {
    const prefix = Reflect.getMetadata("prefix", controller.constructor);
    const routes = Reflect.getMetadata("routes", controller.constructor) || [];

    routes.forEach((route: RouteOptions) => {
      const fullPath = `${prefix}${route.path}`;
      if (!paths[fullPath]) paths[fullPath] = {};
      paths[fullPath][route.method] = {
        tags: route.tags,
        summary: route.summary,
        description: route.description,
        parameters: route.parameters,
        requestBody: route.requestBody,
        security: route.security,
        responses: route.responses || {
          200: {
            description: "Success",
          },
        },
      };
    });
  });

  return swaggerJsdoc({
    swaggerDefinition: { ...options, paths },
    apis: [],
  });
}