import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  @Input() productToShow: Product;

  constructor() {   }

  ngOnInit() {
    const serviceProdcut = new ProductService();
  }

}
