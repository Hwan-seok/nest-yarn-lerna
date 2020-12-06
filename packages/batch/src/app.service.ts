import { Injectable } from '@nestjs/common';
import { NewEnum } from '@test/core';

@Injectable()
export class AppService {
  getHello(): string {
    NewEnum;
    return 'Hello World!';
  }
}
