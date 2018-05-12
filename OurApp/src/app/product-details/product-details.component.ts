import { Component, OnInit } from '@angular/core';
import { Product } from '../../models';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productToShow: Product;

  constructor( private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    const serviceProdcut = new ProductService();
    this.route.paramMap.subscribe((params: ParamMap) => {
      const param1 = Number(params.get('paramId'));
      if (!isNaN(param1)) {
      this.productToShow = serviceProdcut.getProductById(param1);
      }
    });
  }

  goBack() {
    this.location.back();
  }


}
