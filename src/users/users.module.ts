import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Receiver } from './entities/receiver.entity';
import { Customer } from './entities/customer.entity';
import { Address } from './entities/address.entity';
import { ReceiversController } from './receivers/receivers.controller';
import { ReceiversService } from './receivers/receivers.service';
import { CustomersService } from './customers/customers.service';
import { CustomersController } from './customers/customers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Receiver, Customer, Address])],
  controllers: [ReceiversController, CustomersController],
  providers: [ReceiversService, CustomersService],
})
export class UsersModule {}
