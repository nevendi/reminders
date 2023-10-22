import {
  Column,
  Entity,
} from 'typeorm';
import { BaseEntity } from '../../common/base.entity';

@Entity()
export abstract class User extends BaseEntity {

  @Column()
  name: string;

  @Column({ name: 'paternal_name' })
  paternalName: string;

  @Column({ name: 'maternal_name' })
  maternalName: string;

  @Column({ unique: true })
  email: string;

  @Column({ name: 'phone_number', unique: true })
  phoneNumber: string;
}
