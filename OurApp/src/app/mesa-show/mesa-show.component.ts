import { Relation } from './../../models';
import { DBService } from './../../db.service';
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

    Relations: Relation[] = [];
    Products: Product[] = [];
    mesa: Number;

    constructor( private location: Location, private route: ActivatedRoute, private DbService: DBService) { }

    ngOnInit() {
      this.Products = [];
      this.route.paramMap.subscribe((params: ParamMap) => {
        const param1 = String(params.get('paramId'));
        this.DbService.getRelationsFromTableById(param1).subscribe( relations => {
          this.Relations = relations;
          relations.forEach(relation => {
            this.DbService.getProductById(relation.product).subscribe( product => {
            this.Products.push(product);
            });
          });
        });
        this.mesa = Number(param1);
      });
    }

    totalPrice(): Number {
      let res = 0;
      for (const product of this.Products) {
        res += product.price;
      }
      return res;
    }

    goBack() {
      this.location.back();
    }

    deleteThis() {
      this.DbService.deleteTableByNumber(this.mesa);
      window.location.href = 'http://localhost:3000/mesas';
    }

    seeTables() {
      window.location.href = 'http://localhost:3000/mesas';

    }

    deleteRelation(pid) {
      const relation = {table: this.mesa, product: pid};
      this.DbService.deleteRelation(relation);
      this.ngOnInit();
      delete this.Products[pid];
    }

}
