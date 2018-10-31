import { DBService } from './../../db.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  Allproducts: Product[] = [];
  ProductSearch$ = new FormControl('');

  constructor(private DbService: DBService) {}

  ngOnInit() {
    this.DbService.getAllProducts().subscribe(products => {
      this.products = products;
      this.Allproducts = products;
    });
  }
  Searching() {
    this.products = this.Allproducts.filter(product => {
      return product.name.includes(this.ProductSearch$.value);
    });
  }
}
