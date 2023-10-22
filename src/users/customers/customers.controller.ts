import { Controller } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { CustomersService } from './customers.service';
import { BaseController } from '../../common/base.controller';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {
  }
}
