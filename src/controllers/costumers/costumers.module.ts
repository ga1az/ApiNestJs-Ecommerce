import { Module } from '@nestjs/common';
import { CostumersService } from './costumers.service';
import { CostumersController } from './costumers.controller';

@Module({
  controllers: [CostumersController],
  providers: [CostumersService]
})
export class CostumersModule {}
