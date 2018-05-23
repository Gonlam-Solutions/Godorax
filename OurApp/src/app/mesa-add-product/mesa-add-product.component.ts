import { Component, OnInit } from '@angular/core';
import { Product } from '../../models';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-mesa-add-product',
  templateUrl: './mesa-add-product.component.html',
  styleUrls: ['./mesa-add-product.component.css']
})
export class MesaAddProductComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit() {
    const serviceProdcut = new ProductService();
     this.products = serviceProdcut.getProducts();
  }

}
