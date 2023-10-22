import {BaseDto} from "./base.dto";

export interface BaseServiceContract<T>{
    findAll(): Promise<T[]>;
    findOne(id: string): Promise<T>;
    update(entity: T): Promise<T>;
    create(dto: BaseDto): Promise<string>;
    delete(id: string): Promise<void>;
}