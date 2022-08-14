import { Controller } from '@nestjs/common';
import { CostumersService } from './costumers.service';

@Controller('costumers')
export class CostumersController {
  constructor(private readonly costumersService: CostumersService) {}
}
