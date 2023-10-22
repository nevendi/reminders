import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageTemplateDto } from '../dto/create_message_template.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageTemplate } from '../entities/message_template.entity';
import { Repository } from 'typeorm';
import { CustomersService } from '../../users/customers/customers.service';

@Injectable()
export class MessagesTemplatesService{
  constructor(
    @InjectRepository(MessageTemplate)
    private readonly messageTemplateRepository: Repository<MessageTemplate>,
    private readonly customersService: CustomersService,
  ) {

  }

  async create(
    createTemplateDto: CreateMessageTemplateDto,
  ): Promise<MessageTemplate> {
    console.log(createTemplateDto);
    const customer = await this.customersService.findOne(
      'cea295c1-78a4-4224-b68d-ce6df6d4ec2b',
    );
    const messageTemplate = this.messageTemplateRepository.create({
      ...createTemplateDto,
      customer,
    });
    return await this.messageTemplateRepository.save(messageTemplate);
  }
}
