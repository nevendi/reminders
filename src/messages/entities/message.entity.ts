import {Column, PrimaryGeneratedColumn} from "typeorm";
import {Customer} from "../../users/entities/customer.entity";
import {MessageTemplate} from "./message_template.entity";

class Message {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    messageTemplate: MessageTemplate;

    @Column()
    customer: Customer;
}