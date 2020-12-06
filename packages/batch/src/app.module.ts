import { Module } from '@nestjs/common';
import { LibModule } from '@test/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [LibModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
