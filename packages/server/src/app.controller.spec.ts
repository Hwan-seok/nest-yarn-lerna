import { Test, TestingModule } from '@nestjs/testing';
import { NAppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: NAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NAppController],
      providers: [AppService],
    }).compile();

    appController = app.get<NAppController>(NAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
