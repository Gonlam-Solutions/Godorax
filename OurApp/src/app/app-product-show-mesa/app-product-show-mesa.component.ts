import { DBService } from './../../db.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';




@Component({
  selector: 'app-app-product-show-mesa',
  templateUrl: './app-product-show-mesa.component.html',
  styleUrls: ['./app-product-show-mesa.component.css']
})
export class AppProductShowMesaComponent implements OnInit {

  private _success = new Subject<string>();
  @Input() productToShow: Product;
  @Input() mesa: Number;
  successMessage: string;



  constructor(public router: Router, private DbService: DBService) { }

  ngOnInit() {
    const serviceProdcut = new ProductService();
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(500)
    ).subscribe(() => this.successMessage = null);
  }


  AddProduct() {
    const relation = {table: this.mesa, product: this.productToShow._id};
    this.DbService.createRelation(relation);
    this.changeSuccessMessage();
  }
  public changeSuccessMessage() {
    this._success.next('product succesfully added');
  }
}
