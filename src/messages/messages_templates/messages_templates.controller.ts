import { Body, Controller, Post } from '@nestjs/common';
import { MessagesTemplatesService } from './messages_templates.service';
import { CreateMessageTemplateDto } from '../dto/create_message_template.dto';
import { BaseController } from '../../common/base.controller';
import { MessageTemplate } from '../entities/message_template.entity';
import { Message } from '../entities/message.entity';

@Controller('messages/templates')
export class MessagesTemplatesController extends BaseController<MessageTemplate> {
  constructor(
    private readonly messageTemplatesService: MessagesTemplatesService,
  ) {
    super(messageTemplatesService);
  }
}
