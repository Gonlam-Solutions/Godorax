import { Component, OnInit } from '@angular/core';
import { Product } from '../../models';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productToShow: Product;

  constructor() { }

  ngOnInit() {
    const serviceProdcut = new ProductService();
    this.productToShow = serviceProdcut.generateProduct();
  }

}
