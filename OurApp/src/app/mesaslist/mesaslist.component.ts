import { DBService } from './../../db.service';
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
  constructor(private http: HttpClient, private DbService: DBService) {
  }

  ngOnInit() {
    this.DbService.getAllTables().subscribe(tables => {
    this.mesas = tables;
    this.mesas.sort((mesa1, mesa2) =>
      mesa1.tableNumber - mesa2.tableNumber
      );
    });
  }

  addTable() {

    const val = Number(this.mesas[this.mesas.length - 1].tableNumber) + 1;
    // const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15);
    const mesa = {tableNumber: val};
    this.DbService.createTable(mesa);
    window.location.reload();

    /* Codigo para funcionamiento con el MOCK
    const val = MOCK_TABLES[MOCK_TABLES.length - 1].id;
    MOCK_TABLES.push(new Mesa([], val + 1));
    */
  }
}
