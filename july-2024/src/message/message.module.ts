import { Module } from '@nestjs/common';
import MessageController from './message.controller';

@Module({
  imports: [],
  controllers: [MessageController],
  providers: [],
  exports: [],
})
class MessageModule {}

export default MessageModule;
