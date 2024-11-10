# Swagger Decorators

_Read this in other languages: [English](README.md), [Português](README.pt-br.md)_

A TypeScript decorator library for automatically generating Swagger documentation for APIs. It simplifies the creation of route definitions, parameters, and responses using decorators, enabling clearer and more maintainable documentation.

## Sumário

- [Installation](#instalation)
- [Configurations](#configurations)
- [Usage](#usage)
  - [Defining Controllers and Routes](#defining-controllers-and-routes)
  - [Specifying Parameters](#specifying-parameters)
  - [Specifying Request Body](#specifying-request-body)
  - [Defining Responses](#defining-responses)
- [Full Example](#full-example)
- [Contributing](#contributing)
- [License](#license)

## Installation

First, install the library with the following command:

```bash
npm install swagger-decorators-express
```

## Configurations

In your `tsconfig.json` file, enable these two settings, so that you can use the decorators.

```bash
 "experimentalDecorators": true,
 "emitDecoratorMetadata": true
```

In your api's main file, like `index.ts`, for example, import the functions to generate swagger documentation.

```bash
import { generateSwaggerDocs } from "swagger-decorators";

const { swaggerUiServe, swaggerUiSetup } = generateSwaggerDocs(
      [new ExampleController()],
      {
        openapi: "3.0.0",
        info: {
          title: "API Example",
          version: "1.0.0",
          description: "API Documentation",
        },
      }
    );
this.app.use("/docs", swaggerUiServe, swaggerUiSetup);
```

## Usage

## Defining Controllers and Routes

```bash
import { ControllerDocs, RouteDocs } from 'swagger-decorators';

@ControllerDocs('/example')
export class ExampleController {
  @RouteDocs({
    path: '/',
    method: 'get',
    summary: 'Get example',
    description: 'Retrieve example data',
  })
  getExample() {
    return { message: 'Hello, World!' };
  }

  @RouteDocs({
    path: '/create',
    method: 'post',
    summary: 'Create example',
    description: 'Create new example entry',
  })
  createExample() {
    return { message: 'Created!' };
  }
}
```

## Specifying Parameters

```bash
const parameters = [
  {
    in: 'header',
    name: 'api-key',
    required: true,
    schema: {
      type: 'string',
      example: 'my-api-key',
    },
  },
];
```

## Specifying Request Body

```bash
const requestBody = {
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          email: { type: 'string' }
        },
        example: {
          email: 'example@mail.com'
        },
      },
    },
  },
};
```

## Defining Responses

```bash
const responses: Responses = {
  200: {
    description: 'Success Response.',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            id: { type: 'number', example: 1 },
            value: { type: 'number', example: 10 },
            type: { type: 'string', example: 'example' },
          },
        },
      },
    },
  },
  default: {
    description: 'Unexpected error',
  },
};

```

## Full Example

```bash
import { ControllerDocs, RouteDocs } from 'swagger-decorators';

@ControllerDocs('/client')
export class ClientController {
  @RouteDocs({
    path: '/edit',
    method: 'put',
    summary: 'Edit client information',
    tags: ['Client'],
    parameters: [
      {
        in: 'header',
        name: 'security-key',
        required: true,
        schema: {
          type: 'string',
          example: 'my-api-key',
        },
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              email: { type: 'string' },
              phone: { type: 'string' }
            },
            example: {
              email: 'example@mail.com',
              phone: '1234567890'
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Information edited successfully.',
      },
      default: {
        description: 'Error while editing client information',
      },
    },
  })
  editClient() {
    return { message: 'Updated!' };
  }
}

```

## Contributing

Feel free to open issues or pull requests for improvements and fixes. Feedback and suggestions are welcome.

## License

---

This file provides detailed documentation for installation, usage, and main features of the library, with practical examples to help other developers easily use your library.
