import { DBService } from './../../db.service';
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

  constructor( private location: Location, private route: ActivatedRoute, private DbService: DBService) { }

  ngOnInit() {
    const serviceProdcut = new ProductService();
    this.route.paramMap.subscribe((params: ParamMap) => {
      const param1 = String(params.get('paramId'));
      this.DbService.getProductById(param1).subscribe(product =>
        this.productToShow = product
      );
    });
  }

  goBack() {
    this.location.back();
  }


}
