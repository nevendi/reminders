import {DeepPartial, Repository} from 'typeorm';
import { BaseEntity } from './base.entity';
import { BaseServiceContract } from './base.service.contract';
import { BadGatewayException } from '@nestjs/common';
import { PaginationQueryDto } from './pagination-query.dto';

export class Service<T extends BaseEntity> implements BaseServiceContract<T> {
  constructor(private readonly repository: Repository<T>) {}

  findAll(paginationQuery: PaginationQueryDto): Promise<T[]> {
    const { limit, offset } = paginationQuery;
    try {
      return <Promise<T[]>>this.repository.find({
        skip: offset,
        take: limit,
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  create(dto: DeepPartial<T>): Promise<string> {
    try {
      return new Promise<string>((resolve, reject) => {
        this.repository
          .save(dto)
          .then((created) => resolve(created.id))
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  findOne(id: any): Promise<T> {
    try {
      return <Promise<T>>this.repository.findOne({ where: { id } });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async delete(id: string) {
    try {
      await this.repository.delete(id);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  update(entity: any): Promise<any> {
    try {
      return new Promise<any>((resolve, reject) => {
        this.repository
          .findOne({ where: { id: entity.id } })
          .then((responseGet) => {
            try {
              if (responseGet == null) reject('Not existing');
              let retrievedEntity: any = responseGet as any;
              this.repository
                .save(retrievedEntity)
                .then((response) => resolve(response))
                .catch((err) => reject(err));
            } catch (e) {
              reject(e);
            }
          })
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
