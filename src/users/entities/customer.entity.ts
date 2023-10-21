import { Address } from './address.entity';
import { User } from './user.entity';
import {Entity} from "typeorm";

@Entity()
export class Customer extends User {
  businessName: string;
  businessImage: string;
  address: Address;
  phoneValidated: boolean;
  passwordHash: string;
}
