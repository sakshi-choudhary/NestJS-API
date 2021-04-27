import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { name: string } {
    // return this.appService.getHello();
    return { name: 'sakku' };
  }
}
