import { Injectable } from '@nestjs/common';
import { Customer } from '../users/entities/customer.entity';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create_message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    return Promise.resolve(undefined);
  }

  async findAll(customer: Customer): Promise<Message[]> {
    return await this.messageRepository.find();
  }

  async findOne(id: string): Promise<Message> {
    return Promise.resolve(undefined);
  }
}
