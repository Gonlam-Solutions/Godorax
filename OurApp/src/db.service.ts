import { Mesa, Relation } from './models';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DBService {

  constructor(private http: Http) { }

  // Get all posts from the API
  public handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
  }

  getAllProducts() {
    return this.http.get('/api/products').pipe(
      map((res) => {
        return res.json();
      })
    );
  }
  getAllProductsFiltered(text: String) {
    return this.http.get('/api/products/filter/' + text).pipe(
      map((res) => {
        return res.json();
      })
    );
  }

  getProductById(Id: String) {
    return this.http.get('api/products/' + Id).pipe(
      map((res) => res.json() )
    );
  }

  getAllTables() {
  return this.http.get('api/tables').pipe(
    map((res) => res.json() )
  );
  }

  getRelationsFromTableById(id: String) {
    return this.http.get('api/tables/' + id).pipe(
      map((res) => res.json())
    );
  }
  createTable(mesa: any) {
    return this.http.post('api/tables/', mesa)
      .toPromise()
      .then(response => response.json() as Mesa)
      .catch(this.handleError);
  }
  deleteTableByNumber(tn: Number) {
    return this.http.delete('api/tables/' + tn)
    .toPromise()
    .catch(this.handleError);
  }

  createRelation(relation: any) {
    return this.http.post('api/relations/', relation)
      .toPromise()
      .then(response => response.json() as Relation)
      .catch(this.handleError);
  }

  deleteRelation(relation: any) {
    return this.http.delete('api/relation/' + relation.table + '/' + relation.product)
    .toPromise()
    .catch(this.handleError);
  }

}


