import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import swaggerConfigHandler from './config/swagger/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger configuration
  swaggerConfigHandler(app);

  await app.listen(8080);
}

bootstrap();
