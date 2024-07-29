import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  createProductDto,
  createProductSchema,
} from './dtos/create.product.dto';
import { CreateProductPipe } from './pipes/create.product.pipe';
import { UpdateProductDto } from './dtos/update.product.dto';

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
      status: HttpStatus.CREATED,
      data: createProductData,
    };
  }

  @Put('/:id')
  @UsePipes(new ValidationPipe())
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductData: UpdateProductDto,
  ) {
    console.log('update product controller called');

    return {
      status: HttpStatus.CREATED,
      id: id,
      data: updateProductData,
    };
  }
}
