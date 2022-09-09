import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  // /products?limit=100&offset=0&brand=asus
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): object {
    return this.productsService.findAll();
  }

  // /products/filter
  @Get('/filter')
  getProductFiller(): object {
    return {
      filter: 'filter',
    };
  }

  // /products/1
  @Get(':productId')
  getProduct(@Param('productId', ParseIntPipe) productId: number): object {
    // + para parsear a number
    return this.productsService.findOne(productId);
  }

  // Payload es toda la información que se envía en el body
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(@Param('id') id: string, @Body() payload: any) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id') id: string) {
    return this.productsService.deleteOne(+id);
  }
}
