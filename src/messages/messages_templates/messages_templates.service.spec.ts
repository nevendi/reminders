import { Test, TestingModule } from '@nestjs/testing';
import { MessagesTemplatesService } from './messages_templates.service';

describe('MessagesTemplatesService', () => {
  let service: MessagesTemplatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagesTemplatesService],
    }).compile();

    service = module.get<MessagesTemplatesService>(MessagesTemplatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
