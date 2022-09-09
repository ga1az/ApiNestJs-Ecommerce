import { Controller, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  @Get(':idOrder')
  getOrder(@Param('idOrder') idOrder: string): object {
    return {
      idOrder: idOrder,
    };
  }
}
