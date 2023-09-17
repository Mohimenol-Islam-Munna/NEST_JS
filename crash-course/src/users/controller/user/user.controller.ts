import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
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
  @UsePipes(new ValidationPipe())
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
  @UsePipes(new ValidationPipe())
  createUser(@Body() body: UserDto) {
    console.log('body :', body);
    return 'UserDto success';
  }

  @Get('get/:id/:find')
  getSingleUser(@Param('id') id: string, @Param("find") find: string) {
    return {
      status: 200,
      id: id,
      find: find,
      error: null,
      message: 'get user successfully!',
    };
  }

  @Get('active')
  getActiveUser(@Query('status') status: string) {
    return {
      status: 200,
      activeStatus: status || null,
      error: null,
      message: 'get active user successfully!',
    };
  }
}
