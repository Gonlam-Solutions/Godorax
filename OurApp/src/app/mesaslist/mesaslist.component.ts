import { ProductService } from './../product.service';
import { Product } from './../../models';
import { Component, OnInit } from '@angular/core';
import { Mesa } from '../../models';

import { MOCK_TABLES } from '../../mocks';
import { TableserviceService } from '../tableservice.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-mesaslist',
  templateUrl: './mesaslist.component.html',
  styleUrls: ['./mesaslist.component.css']
})
export class MesaslistComponent implements OnInit {

  mesas: Mesa[];
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const servicetables = new TableserviceService();
    servicetables.getMesas(this.http).subscribe(mesas => this.mesas = mesas);
  }

  addTable() {
    const val = Number(this.mesas[this.mesas.length - 1].id) + 1;
    this.mesas.push(new Mesa([], val));
    /* Codigo para funcionamiento con el MOCK
    const val = MOCK_TABLES[MOCK_TABLES.length - 1].id;
    MOCK_TABLES.push(new Mesa([], val + 1));
    console.log('hola');
    */
  }
}
