import { Controller } from '@nestjs/common';
import { BaseController } from '../common/base.controller';
import { Message } from './entities/message.entity';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController{
  constructor(private readonly messagesService: MessagesService) {}
}
