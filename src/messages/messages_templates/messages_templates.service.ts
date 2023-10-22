import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageTemplateDto } from '../dto/create_message_template.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageTemplate } from '../entities/message_template.entity';
import { Repository } from 'typeorm';
import { CustomersService } from '../../users/customers/customers.service';
import { Service } from '../../common/service';

@Injectable()
export class MessagesTemplatesService extends Service<MessageTemplate> {
  constructor(
    @InjectRepository(MessageTemplate)
    private readonly messageTemplateRepository: Repository<MessageTemplate>,
    private readonly customersService: CustomersService,
  ) {
    super(messageTemplateRepository);
  }

  async create(createTemplateDto: CreateMessageTemplateDto): Promise<string> {
    console.log(createTemplateDto);
    const customer = await this.customersService.findOne(
      '09319231-49f4-4d86-8fb2-b3df6a0f1a8b',
    );
    const messageTemplate = this.messageTemplateRepository.create({
      ...createTemplateDto,
      customer,
    });
    const newMessageTemplate =
      await this.messageTemplateRepository.save(messageTemplate);
    return newMessageTemplate.id;
  }
}
