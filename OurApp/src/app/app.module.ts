import { DBService } from './../db.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { MesaslistComponent } from './mesaslist/mesaslist.component';
import { MesaShowComponent } from './mesa-show/mesa-show.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MesaAddProductComponent } from './mesa-add-product/mesa-add-product.component';
import { AppProductShowMesaComponent } from './app-product-show-mesa/app-product-show-mesa.component';
import { FormsModule} from '@angular/forms';


const routes: Routes = [
  {path: 'products', component: ProductsListComponent},
  {path: 'mesas', component: MesaslistComponent},
  {path: 'mesas/:paramId/Bill', component: MesaShowComponent},
  {path: 'mesas/:paramId', component: MesaAddProductComponent},
  {path: 'products/:paramId', component: ProductDetailsComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ProductShowComponent,
    ProductDetailsComponent,
    ProductsListComponent,
    MesaslistComponent,
    MesaShowComponent,
    MesaAddProductComponent,
    AppProductShowMesaComponent,

  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [DBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
