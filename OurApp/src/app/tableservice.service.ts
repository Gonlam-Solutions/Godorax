import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import { Mesa } from '../models';

@Injectable()
export class TableserviceService {

  constructor() { }

  getMesas(http: HttpClient): Observable<Mesa[]> {
    return http.get<Mesa[]>('/assets/jsons/tables.json');
  }
}

