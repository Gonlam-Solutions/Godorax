import { DBService } from './../../db.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

   products: Product[] = [];


  constructor(private DbService: DBService) { }

  ngOnInit() {
    this.DbService.getAllProducts().subscribe(products => {
    this.products = products;
   });
  }

}
