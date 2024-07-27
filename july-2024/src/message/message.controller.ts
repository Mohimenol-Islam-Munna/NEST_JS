import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('message')
class MessageController {
  allMessage = [
    { id: 1, msg: 'this is first message' },
    { id: 2, msg: 'this is second message' },
    { id: 3, msg: 'this is third message' },
  ];

  @Post('/create')
  createMessage() {
    this.allMessage.push({
      id: this.allMessage.length + 1,
      msg: 'This is another message',
    });
  }

  @Get('/')
  getAllMessage() {
    return this.allMessage;
  }

  @Get('/id')
  getMessage() {
    return { id: 3, msg: 'this is third message' };
  }

  @Put('/id')
  updateMessage() {
    let id: number = 2;

    const msgIndex = this.allMessage.findIndex((item) => item.id === id);

    if (msgIndex >= 0) {
      this.allMessage[msgIndex].msg = 'This is updated message';
    }
  }

  @Delete('/delete')
  deleteMessage() {
    let id: number = 3;

    const afterSoftDelete = this.allMessage.filter((item) => item.id !== id);

    this.allMessage = afterSoftDelete;
  }
}

export default MessageController;
