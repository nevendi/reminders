import { BaseEntity } from './base.entity';
import { BaseServiceContract } from './base.service.contract';
import { Body, Get, Post, Delete, Param, Put, Query } from '@nestjs/common';
import { DeepPartial } from 'typeorm';
import { Transform } from 'class-transformer';
import { PaginationQueryDto } from './pagination-query.dto';

export class BaseController<T extends BaseEntity> {
  constructor(private readonly baseServiceContract: BaseServiceContract<T>) {}

  @Get()
  async findAll(@Query() paginationQuery: PaginationQueryDto): Promise<T[]> {
    return this.baseServiceContract.findAll(paginationQuery);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<T> {
    return this.baseServiceContract.findOne(id);
  }

  @Post()
  async create(@Body() entity: DeepPartial<T>): Promise<string> {
    return this.baseServiceContract.create(entity);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.baseServiceContract.delete(id);
  }

  @Put()
  async update(@Body() entity: T): Promise<T> {
    return this.baseServiceContract.update(entity);
  }
}
