import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
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

  @JoinColumn({ name: 'receiver_id' })
  @ManyToOne(() => Receiver, (receiver) => receiver.messages)
  receiver: Receiver;

  @Column({ name: 'scheduled_at' })
  scheduledAt: Date;

  @Column({ default: MessageState.SCHEDULED })
  state: MessageState;

  @JoinColumn({ name: 'customer_id' })
  @ManyToOne(() => Customer, (customer) => customer.messages)
  customer: Customer;
}
