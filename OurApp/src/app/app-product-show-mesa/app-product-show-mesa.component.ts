import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-product-show-mesa',
  templateUrl: './app-product-show-mesa.component.html',
  styleUrls: ['./app-product-show-mesa.component.css']
})
export class AppProductShowMesaComponent implements OnInit {

  @Input() productToShow: Product;

  constructor(public router: Router) { }

  ngOnInit() {
    const serviceProdcut = new ProductService();
  }

  AddProduct() {
  }

}
