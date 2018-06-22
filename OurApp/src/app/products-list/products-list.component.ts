import { DBService } from './../../db.service';
import { Component, OnInit, HostListener, Directive } from '@angular/core';
import { Product } from '../../models';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  Allproducts: Product[] = [];
  searchElement;
  constructor(private DbService: DBService) {  }

  ngOnInit() {
    this.DbService.getAllProducts().subscribe(products => {
      this.products = products;
      this.Allproducts = products;
    });
  }
  Searching(event) {
    this.products = this.Allproducts.filter(product => {
      return product.name.includes(event.target.value);
    });
  }
}
