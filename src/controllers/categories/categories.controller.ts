import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

  @Get(':id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string): object {
    return {
      id: id,
      productId: productId,
    }
  }
}
