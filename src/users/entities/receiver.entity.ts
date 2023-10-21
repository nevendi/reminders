import { User } from './user.entity';
import { Entity } from 'typeorm';

@Entity({ name: 'receivers' })
export class Receiver extends User {}
