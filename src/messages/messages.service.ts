import { Injectable } from '@nestjs/common';
import { Message } from './entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from '../common/service';
import { CustomersService } from '../users/customers/customers.service';

@Injectable()
export class MessagesService extends Service<Message> {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    private readonly customersService: CustomersService,
  ) {
    super(messageRepository);
  }

  async create(message: Partial<Message>): Promise<string> {
    /*
    * We need to change all this kind of customer retrieval
    * getting with something like authContext (if any)
    * */
    const customer = await this.customersService.findOne(
      'cea295c1-78a4-4224-b68d-ce6df6d4ec2b',
    );
    const augmentedMessage = { ...message, customer };
    const newMessage = await this.messageRepository.save(augmentedMessage);
    return newMessage.id;
  }
}
