import { Test, TestingModule } from '@nestjs/testing';
import { MessagesTemplatesController } from './messages_templates.controller';

describe('MessagesTemplatesController', () => {
  let controller: MessagesTemplatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesTemplatesController],
    }).compile();

    controller = module.get<MessagesTemplatesController>(MessagesTemplatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
