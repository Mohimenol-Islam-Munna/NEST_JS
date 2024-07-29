import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import swaggerConfigHandler from './config/swagger/swagger.config';
import { tracerMiddleware } from './middlewares/functional.middleware/tracer.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger configuration
  swaggerConfigHandler(app);

  // global middleware
  app.use(tracerMiddleware);

  await app.listen(8080);
}

bootstrap();
