import {Customer} from "../../users/entities/customer.entity";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class MessageTemplate {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    customer: Customer;

    @Column()
    active: boolean;

    @Column()
    mappingData:[] // [{string:string}]
}