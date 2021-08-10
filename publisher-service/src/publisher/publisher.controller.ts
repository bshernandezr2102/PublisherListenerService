import { Controller, Get, Param } from '@nestjs/common';
import { PublisherService } from './publisher.service';

@Controller('publisher')
export class PublisherController {
  constructor(private readonly publisher: PublisherService) {}
  @Get()
  publishDelivery(): string {
    this.publisher.publishDelivery();
    return 'Queued';
  }
}
