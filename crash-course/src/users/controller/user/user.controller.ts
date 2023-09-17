import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserDto } from 'src/users/dtos/user.dto';

@Controller('user')
export class UserController {
  @Get('all')
  getAllUsers() {
    return {
      status: 200,
      data: [
        { name: 'munna', dev: 'react' },
        { name: 'ifiti', dev: 'node' },
      ],
      error: null,
      message: 'data retrieved successfully!',
    };
  }

  @Post('create/express-way')
  create(@Req() request: Request, @Res() response: Response) {
    const reqBody = request.body;

    console.log('reqBody :', reqBody);

    response.json({
      status: 201,
      data: reqBody,
      error: null,
      message: 'user created successfully!',
    });
  }

  @Post('create/nest-way')
  createUser(@Body() body: UserDto) {
    console.log('body :', body);

    return 'UserDto success';
  }
}
