import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

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
}
