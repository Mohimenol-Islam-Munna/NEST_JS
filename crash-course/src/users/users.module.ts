import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { AdminController } from './controller/admin/admin.controller';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UserController, AdminController],
  providers: [UsersService]
})
export class UsersModule {}
