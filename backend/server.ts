import { middleware } from '#middlewares/middlewares.js';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerSpec from './swagger.js';

const app = express();
const port = process.env.PORT ?? '8000';

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', middleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
});
