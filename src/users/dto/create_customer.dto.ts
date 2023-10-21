import { IsEmail, IsPhoneNumber, IsString, max } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsString()
  paternalName: string;

  @IsString()
  maternalName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsPhoneNumber()
  phoneNumber: string;
}
