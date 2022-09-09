import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/products.entity';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

@Injectable()
export class ProductsService {
  idIncremento: number = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 1000,
      stock: 1,
      image: 'https://picsum.photos/200',
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.filter((item) => item.id === id);
    if (product.length <= 0) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.idIncremento++;
    const newProduct: Product = {
      id: this.idIncremento,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  // Todo: Revisar
  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product.length > 0) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product[index],
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  deleteOne(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }
}
