import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { NewEnum } from '@test/core';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    NewEnum;
    return this.appService.getHello();
  }
}
