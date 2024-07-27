import { Module } from '@nestjs/common';
import { PrismaClientRepository } from './prismaClient.repository';

@Module({
  providers: [PrismaClientRepository],
  exports: [PrismaClientRepository],
})
export class PrismaClientModule {}
