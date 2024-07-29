import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  body: string;

  @IsString()
  @IsOptional()
  review: string;

  @IsNumber()
  @IsOptional()
  rating: number;

  @IsBoolean()
  published: boolean;
}
