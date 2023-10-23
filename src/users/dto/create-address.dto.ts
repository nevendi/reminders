import {IsBoolean, IsOptional, IsPostalCode, IsString} from 'class-validator';

export class CreateAddressDto {
  @IsString()
  street: string;

  @IsString()
  colony: string;

  @IsString()
  municipality: string;

  @IsString()
  state: string;

  @IsPostalCode()
  postalCode: number;

  @IsString()
  houseNumber: string;

  @IsString()
  @IsOptional()
  references: string;

  @IsBoolean()
  isPrincipal: boolean;
}
