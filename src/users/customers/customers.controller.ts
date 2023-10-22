import { Controller } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { CustomersService } from './customers.service';
import { BaseController } from '../../common/base.controller';

@Controller('customers')
export class CustomersController extends BaseController<Customer> {
  constructor(private readonly customerService: CustomersService) {
    super(customerService);
  }
}
