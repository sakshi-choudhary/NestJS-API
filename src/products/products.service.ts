import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  _addProduct(title: string, desc: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  _getAllProducts() {
    return [...this.products];
  }

  _getProduct(productId: string) {
    const product = this.products.find((prod) => prod.id == productId);
    if (!product) {
      throw new NotFoundException('Opps, Could not find the product!');
    }
    return { ...product };
  }
}
