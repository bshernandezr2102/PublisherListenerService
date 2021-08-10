import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  a = false;
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @EventPattern('delivery')
  async listenDelivery(data: string) {
    if (!this.a) {
      console.log(data + ' Accepted');
      this.a = true;
    } else {
      console.log(data + ' Rejected');
    }
  }
}
