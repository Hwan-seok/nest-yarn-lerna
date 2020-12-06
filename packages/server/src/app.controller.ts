import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class NAppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHellooooo(): string {
    return this.appService.getHello();
  }
}
