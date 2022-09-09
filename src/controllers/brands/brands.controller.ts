import { Controller, Get, Param } from '@nestjs/common';
import { BrandsService } from './brands.service';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands(): object {
    return {
      brands: 'brands',
    };
  }

  @Get(':idBrand')
  getBrand(@Param('idBrand') idBrand: string): object {
    return {
      idBrand: idBrand,
    };
  }
}
