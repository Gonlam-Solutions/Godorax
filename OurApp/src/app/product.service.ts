import { Injectable } from '@angular/core';
import { Product } from '../models';
import { MOCK_PRODUCTS } from '../mocks';


@Injectable()
export class ProductService {

  constructor() { }

  generateProduct(): Product[] {
    return MOCK_PRODUCTS;

  }

  getProductById(id: number): Product {
    return id > 0 && id < 5 ? MOCK_PRODUCTS[id - 1] : undefined;
  }

}
