import { Module } from '@nestjs/common';
import { NAppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [NAppController],
  providers: [AppService],
})
export class AppModule {}
