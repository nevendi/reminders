import { Column } from 'typeorm';
import { IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { MappingDataItem } from '../entities/message_template.entity';
import { BaseDto } from '../../common/base.dto';

export class CreateMessageTemplateDto extends BaseDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  body: string;

  @Expose({ name: 'mapping_data' })
  mappingData: object[]; // [{string:string}]
}
