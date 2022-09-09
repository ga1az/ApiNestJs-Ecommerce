import { Controller, Get, Param } from '@nestjs/common';
import { CostumersService } from './costumers.service';

@Controller('costumers')
export class CostumersController {
  @Get()
  getCostumers(): object {
    return {
      costumers: 'costumers',
    };
  }

  @Get(':idCostumer')
  getCostumer(@Param('idCostumer') idCostumer: string): object {
    return {
      idCostumer: idCostumer,
    };
  }
}
