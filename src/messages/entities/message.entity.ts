import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from '../../users/entities/customer.entity';
import { MessageTemplate } from './message_template.entity';
import { Receiver } from '../../users/entities/receiver.entity';
import { BaseEntity } from '../../common/base.entity';

export enum MessageState {
  SCHEDULED,
  SENT,
}

@Entity({ name: 'messages' })
export class Message extends BaseEntity {

  @JoinColumn({ name: 'message_template_id' })
  @OneToOne(() => MessageTemplate)
  messageTemplate: MessageTemplate;

  @JoinColumn({ name: 'customer_id' })
  @OneToOne(() => Customer)
  customer: Customer;

  @JoinColumn({ name: 'receiver_id' })
  @OneToOne(() => Receiver)
  receiver: Receiver;

  @Column({ name: 'scheduled_at' })
  scheduledAt: Date;

  @Column({ default: MessageState.SCHEDULED })
  state: MessageState;
}
