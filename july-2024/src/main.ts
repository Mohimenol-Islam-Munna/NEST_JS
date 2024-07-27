import { NestFactory } from '@nestjs/core';
import MessageModule from './message/message.module';

const bootstrap = async () => {
  const app = await NestFactory.create(MessageModule);
  await app.listen(8080);
};

bootstrap();
