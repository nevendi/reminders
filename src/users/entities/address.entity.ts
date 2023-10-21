import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Address {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    street: string;
    colony: string;
    municipality: string;
    state: string;
    postalCode: number;
    number: string;
    references: string;
    isPrincipal: boolean;
}