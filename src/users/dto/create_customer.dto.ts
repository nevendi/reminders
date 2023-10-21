import { IsEmail, IsPhoneNumber, IsString, max } from 'class-validator';
import { Expose } from 'class-transformer';

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

  @IsString()
  password: string;

  @IsString()
  @Expose({ name: 'phone_number' })
  phoneNumber: string;
}
