import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get('welcome')
  greetings() {
    return 'Welcome to the nest js world';
  }
}
