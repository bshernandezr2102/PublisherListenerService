import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PublisherService {
  constructor(
    @Inject('PUBLISHER_SERVICE') private readonly client: ClientProxy,
  ) {}
  publishDelivery(): string {
    const date = new Date().getTime();
    this.client.emit('delivery', 'Order number: ' + date);
    return 'a';
  }
}
