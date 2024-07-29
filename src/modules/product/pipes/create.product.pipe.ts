import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

export class CreateProductPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Create product custom pipe');

    try {
      const parsedValue = this.schema.parse(value);

      return parsedValue;
    } catch (err) {
      throw new BadRequestException('Validation Failed');
    }
  }
}
