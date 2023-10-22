import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer.entity';
import { BaseEntity } from '../../common/base.entity';

@Entity({ name: 'addresses' })
export class Address extends BaseEntity {
  @Column()
  street: string;

  @Column()
  colony: string;

  @Column()
  municipality: string;

  @Column()
  state: string;

  @Column({ name: 'postal_code' })
  postalCode: number;

  @Column({ name: 'house_number' })
  houseNumber: string;

  @Column()
  references: string;

  @Column({ name: 'is_principal' })
  isPrincipal: boolean;

  @ManyToMany(() => Customer)
  customers: Customer[];
}
