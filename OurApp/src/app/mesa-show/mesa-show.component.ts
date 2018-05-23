import { Component, OnInit } from '@angular/core';
import { Product, Mesa } from '../../models';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MOCK_TABLES } from '../../mocks';

@Component({
  selector: 'app-mesa-show',
  templateUrl: './mesa-show.component.html',
  styleUrls: ['./mesa-show.component.css']
})
export class MesaShowComponent implements OnInit {

    mesa: Mesa;
    productos: Product [] = [];

    constructor( private location: Location, private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => {
        const param1 = Number(params.get('paramId'));
        if (!isNaN(param1)) {
        this.mesa = MOCK_TABLES[param1 - 1];
        }
      });
      this.mesa.buyedProducts.forEach(
          product => { this.productos.push(new ProductService().getProductById(product));
      });
    }

    totalPrice(): Number {
      let res = 0;
      for (const product of this.productos) {
        res += product.price;
      }
      return res;

    }

    goBack() {
      this.location.back();
    }


}
