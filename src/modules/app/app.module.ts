import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductModule } from '../product/product.module';
import { LoggerMiddleware } from 'src/middlewares/class.middleware/logger.middleware';
import { tracerMiddleware } from 'src/middlewares/functional.middleware/tracer.middleware';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, tracerMiddleware)
      .exclude('/app/test')
      .forRoutes('/app');
  }
}
