import { Address } from './address.entity';
import { User } from './user.entity';
import { Column, Entity, ManyToMany } from 'typeorm';
import { JoinTable } from 'typeorm';

@Entity({ name: 'customers' })
export class Customer extends User {
  @Column({ name: 'business_name', nullable: true })
  businessName: string;

  @Column({ name: 'business_image', nullable: true })
  businessImage: string;

  @ManyToMany(() => Address, (address) => address.customers)
  @JoinTable({
    name: 'customer_address',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'address_id' },
  })
  address: Address[];

  @Column({ name: 'phone_validated', default: false })
  phoneValidated: boolean;

  @Column()
  password: string;
}
