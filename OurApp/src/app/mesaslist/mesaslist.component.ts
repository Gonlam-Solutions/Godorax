import { Component, OnInit } from '@angular/core';
import { Mesa } from '../../models';
import { MOCK_TABLES } from '../../mocks';

@Component({
  selector: 'app-mesaslist',
  templateUrl: './mesaslist.component.html',
  styleUrls: ['./mesaslist.component.css']
})
export class MesaslistComponent implements OnInit {

  mesas: Mesa[];
  constructor() {
    this.mesas = MOCK_TABLES;
  }

  ngOnInit() {
  }

  addTable() {
    const val = MOCK_TABLES[MOCK_TABLES.length - 1].id;
    MOCK_TABLES.push(new Mesa([], val + 1));
    console.log('hola');
  }
}
