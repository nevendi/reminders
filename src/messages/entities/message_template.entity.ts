import { Customer } from '../../users/entities/customer.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { JoinColumn } from 'typeorm';
import { BaseEntity } from '../../common/base.entity';

export interface MappingDataItem {
  label: string;
  value: string;
}

@Entity()
export class MessageTemplate extends BaseEntity {

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  body: string;

  @OneToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @Column({ default: false })
  active: boolean;

  @Column({
    name: 'mapping_data',
    type: 'json',
    transformer: {
      to(value: MappingDataItem[]): string {
        return JSON.stringify(value);
      },
      from(value: string): MappingDataItem[] {
        return JSON.parse(value);
      },
    },
  })
  mappingData: MappingDataItem[];
}
