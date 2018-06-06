import { DBService } from './../../db.service';
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
  @Input() mesa: Number;

  constructor(public router: Router, private DbService: DBService) { }

  ngOnInit() {
    const serviceProdcut = new ProductService();
  }

  AddProduct() {
    const relation = {table: this.mesa, product: this.productToShow._id};
    this.DbService.createRelation(relation);
  }

}
