import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './controllers/categories/categories.module';
import { ProductsModule } from './controllers/products/products.module';
import { BrandsModule } from './controllers/brands/brands.module';
import { UsersModule } from './controllers/users/users.module';
import { CostumersModule } from './controllers/costumers/costumers.module';
import { OrdersModule } from './controllers/orders/orders.module';

@Module({
  imports: [CategoriesModule, ProductsModule, BrandsModule, UsersModule, CostumersModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
