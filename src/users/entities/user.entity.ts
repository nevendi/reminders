import {Column, Entity, Index} from 'typeorm';
import { BaseEntity } from '../../common/base.entity';
import {IsString} from "class-validator";

@Entity()
@Index(["email", "phoneNumber"])
export abstract class User extends BaseEntity {
  @IsString()
  @Column()
  name: string;

  @IsString()
  @Column({ name: 'paternal_name' })
  paternalName: string;

  @IsString()
  @Column({ name: 'maternal_name' })
  maternalName: string;

  @IsString()
  @Column({ unique: true })
  email: string;

  @IsString()
  @Column({ name: 'phone_number', unique: true })
  phoneNumber: string;
}
