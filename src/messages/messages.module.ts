import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesTemplatesController } from './messages_templates/messages_templates.controller';
import { MessagesTemplatesService } from './messages_templates/messages_templates.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Message} from "./entities/message.entity";
import {MessageTemplate} from "./entities/message_template.entity";
import {UsersModule} from "../users/users.module";
import {Customer} from "../users/entities/customer.entity";
import {CustomersService} from "../users/customers/customers.service";

@Module({
  imports: [TypeOrmModule.forFeature([Message, MessageTemplate, Customer]), UsersModule],
  controllers: [MessagesController, MessagesTemplatesController],
  providers: [MessagesService, MessagesTemplatesService, CustomersService]
})
export class MessagesModule {}
