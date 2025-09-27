/* eslint-disable perfectionist/sort-objects */
// src/swagger.ts (or similar file)
import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // Specify OpenAPI version
    info: {
      title: 'Flowboard API',
      version: '1.0.0',
      description: 'API documentation for my Flowboard application',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Adjust to your server URL
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/*.ts', './models/*.ts'], // Paths to your API routes and models
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;
