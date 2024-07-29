import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  UsePipes,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  createProductDto,
  createProductSchema,
} from './dtos/create.product.dto';
import { CreateProductPipe } from './pipes/create.product.pipe';

@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('welcome')
  greetings() {
    return this.productService.greeting();
  }

  @Get('/')
  getAllProductList() {
    return this.productService.getProductList();
  }

  @Post('/')
  @UsePipes(new CreateProductPipe(createProductSchema))
  createProduct(@Body() createProductData: createProductDto) {
    return {
      status: HttpStatus.OK,
      data: createProductData,
    };
  }
}
