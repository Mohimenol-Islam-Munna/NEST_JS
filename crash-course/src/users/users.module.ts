import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { AdminController } from './controller/admin/admin.controller';

@Module({
  controllers: [UserController, AdminController]
})
export class UsersModule {}
