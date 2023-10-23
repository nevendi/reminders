import { BaseDto } from './base.dto';
import { PaginationQueryDto } from './pagination-query.dto';
import {DeepPartial} from "typeorm";

export interface BaseServiceContract<T> {
  findAll(paginationQuery: PaginationQueryDto): Promise<T[]>;

  findOne(id: string): Promise<T>;

  update(entity: T): Promise<T>;

  create(dto: BaseDto): Promise<string>;

  delete(id: string): Promise<void>;
}
