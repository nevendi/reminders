import {PrimaryGeneratedColumn} from "typeorm";

class Message {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    messageTemplate: MessageTemplate;
    customer: Customer;
}