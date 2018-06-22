import { Location } from '@angular/common';
import { DBService } from './../../db.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models';
import { ProductService } from '../product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {AlertCenterService, Alert, AlertType} from 'ng2-alert-center';


@Component({
  selector: 'app-mesa-add-product',
  templateUrl: './mesa-add-product.component.html',
  styleUrls: ['./mesa-add-product.component.css']
})

export class MesaAddProductComponent implements OnInit {

  products: Product[] = [];
  Allproducts: Product[] = [];
  mesa: Number;

  constructor (private DbService: DBService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.DbService.getAllProducts().subscribe(products => {
      this.products = products;
      this.Allproducts = products;
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
    this.mesa = Number(params.get('paramId'));
    });
  }

  goBack() {
    this.location.back();
  }

  Searching(event) {
    this.products = this.Allproducts.filter(product => {
      return product.name.includes(event.target.value);
    });
  }
}
