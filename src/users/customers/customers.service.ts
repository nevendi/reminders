import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateCustomerDto } from '../dto/create_customer.dto';
import { Customer } from '../entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const password = await this.generateHash(createCustomerDto.password);
    const customer = this.customerRepository.create({
      ...createCustomerDto,
      password,
    });
    return await this.customerRepository.save(customer);
  }

  private async generateHash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }
}
