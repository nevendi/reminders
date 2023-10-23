import { IsEmail, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { CreateAddressDto } from './create-address.dto';

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsString()
  @Expose({ name: 'paternal_name' })
  paternalName: string;

  @IsString()
  @Expose({ name: 'maternal_name' })
  maternalName: string;

  @IsEmail()
  email: string;

  address: CreateAddressDto;

  @IsString()
  password: string;

  @IsString()
  @Expose({ name: 'phone_number' })
  phoneNumber: string;
}
