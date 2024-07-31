import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { PrismaClientModule } from '../prismaClient/prismaClient.module';
import { RoleGuard } from 'src/guards/role.guard';
import {
  LoggerMiddleware,
  OtherMiddleware,
} from 'src/middlewares/class.middleware/logger.middleware';

@Module({
  imports: [PrismaClientModule],
  controllers: [ProductController],
  providers: [ProductService, RoleGuard],
  exports: [],
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, OtherMiddleware).forRoutes('/products');
  }
}
