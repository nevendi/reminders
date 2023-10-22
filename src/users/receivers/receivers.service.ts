import { Injectable } from '@nestjs/common';
import { Receiver } from '../entities/receiver.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from '../../common/service';

@Injectable()
export class ReceiversService extends Service<Receiver> {
  constructor(
    @InjectRepository(Receiver)
    private readonly receiverRepository: Repository<Receiver>,
  ) {
    super(receiverRepository);
  }
}
