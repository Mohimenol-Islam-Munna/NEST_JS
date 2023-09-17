import { IsNotEmpty } from 'class-validator';

export class UserDto {
  name: string;

  @IsNotEmpty()
  dev: string;

  @IsNotEmpty()
  sub: string;
}
