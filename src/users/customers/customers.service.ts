import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateCustomerDto } from '../dto/create_customer.dto';
import { Customer } from '../entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from '../../common/service';

@Injectable()
export class CustomersService extends Service<Customer> {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {
    super(customerRepository);
  }

  async create(createCustomerDto: CreateCustomerDto): Promise<string> {
    const password = await this.generateHash(createCustomerDto.password);
    const customer = this.customerRepository.create({
      ...createCustomerDto,
      password,
    });
    const newCustomer = await this.customerRepository.save(customer);
    return newCustomer.id;
  }

  private async generateHash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  async findOne(id: string) {
    return this.customerRepository.findOne({ where: { id } });
  }
}
