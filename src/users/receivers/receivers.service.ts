import { Injectable } from '@nestjs/common';
import { Receiver } from '../entities/receiver.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReceiversService{
  constructor(
    @InjectRepository(Receiver)
    private readonly receiverRepository: Repository<Receiver>,
  ) {
  }
}
