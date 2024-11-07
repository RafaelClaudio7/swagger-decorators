# Swagger Decorators

Uma biblioteca de decoradores em TypeScript para gerar documentação Swagger de forma automática para APIs. Simplifica a criação de definições de rota, parâmetros, e respostas usando decoradores, permitindo uma documentação mais clara e fácil de manter.

## Sumário

- [Instalação](#instalação)
- [Uso](#uso)
  - [Definindo Controladores e Rotas](#definindo-controladores-e-rotas)
  - [Especificando Parâmetros](#especificando-parâmetros)
  - [Especificando Corpo de Requisição](#especificando-corpo-de-requisição)
  - [Definindo Respostas](#definindo-respostas)
- [Exemplo Completo](#exemplo-completo)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Instalação

Primeiro, instale a biblioteca com o seguinte comando:

```bash
npm install swagger-decorators
```

## Uso

```bash
import { Controller, Route } from 'swagger-decorators';

@Controller('/example')
export class ExampleController {
  @Route({
    path: '/',
    method: 'get',
    summary: 'Get example',
    description: 'Retrieve example data',
  })
  getExample() {
    return { message: 'Hello, World!' };
  }

  @Route({
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

## Especificando Parâmetros

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

## Especificando Corpo de Requisição

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

## Definindo Respostas

```bash
const responses: Responses = {
  200: {
    description: 'Operação realizada com sucesso.',
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
    description: 'Erro inesperado',
  },
};

```

## Exemplo completo

```bash
import { Controller, Route } from 'swagger-decorators';

@Controller('/client')
export class ClientController {
  @Route({
    path: '/edit',
    method: 'put',
    summary: 'Edita as informações de um cliente',
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
        description: 'Informações do cliente editadas com sucesso.',
      },
      default: {
        description: 'Erro ao editar as informações do cliente.',
      },
    },
  })
  editClient() {
    return { message: 'Cliente atualizado!' };
  }
}

```

## Contribuindo

Sinta-se à vontade para abrir issues ou pull requests para melhorias e correções. Feedback e sugestões são bem-vindos

## Licença

---

Este arquivo fornece uma documentação detalhada da instalação, uso e principais recursos da biblioteca, com exemplos práticos para que outros desenvolvedores possam usar sua biblioteca facilmente.
