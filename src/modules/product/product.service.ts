import { Injectable } from '@nestjs/common';
import { PrismaClientRepository } from '../prismaClient/prismaClient.repository';

@Injectable()
export class ProductService {
  constructor(private prismaClientRepository: PrismaClientRepository) {}

  greeting() {
    return 'welcome to product module';
  }

  async getProductList() {
    const productList = await this.prismaClientRepository.product.findMany();

    return {
      message: 'All Product List.',
      data: productList,
    };
  }
}
