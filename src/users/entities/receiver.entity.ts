import { User } from './user.entity';
import { Entity, OneToMany, OneToOne } from 'typeorm';
import { Message } from '../../messages/entities/message.entity';

@Entity({ name: 'receivers' })
export class Receiver extends User {
  @OneToMany(() => Message, (message) => message.receiver)
  messages: Message[];
}
