import { Injectable } from '@angular/core';
import { Product } from '../models';


@Injectable()
export class ProductService {

  constructor() { }

  generateProduct(): Product {
    return new Product(10, 'product', ['ingrediente1', 'ingrediente2'],
  // tslint:disable-next-line:max-line-length
  'https://www.ecestaticos.com/image/clipping/992/558/34d74c8ca4af44d5179878e0fcd3cfe4/de-espuma-en-el-cafe-a-frutos-secos-tostados-trucos-con-el-microondas-que-no-sabias.jpg',
  'prodcut description' );

  }

}
