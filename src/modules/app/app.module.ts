import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductModule } from '../product/product.module';
import {
  LoggerMiddleware,
  OtherMiddleware,
} from 'src/middlewares/class.middleware/logger.middleware';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, OtherMiddleware)
      .exclude('/app/test')
      .forRoutes('/app', '/products');
  }
}
