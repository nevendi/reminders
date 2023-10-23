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

  async create(createCustomerDTO: CreateCustomerDto): Promise<string> {
    console.log(`Received the following `);
    console.log(createCustomerDTO);
    const addresses = [createCustomerDTO.address];
    const password = await this.generateHash(createCustomerDTO.password);
    const customer = this.customerRepository.create({
      ...createCustomerDTO,
      password,
      addresses
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
