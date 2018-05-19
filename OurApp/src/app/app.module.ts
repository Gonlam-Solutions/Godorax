import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { MesaslistComponent } from './mesaslist/mesaslist.component';
import { MesaShowComponent } from './mesa-show/mesa-show.component';

const routes: Routes = [
  {path: 'products', component: ProductsListComponent},
  {path: 'mesas', component: MesaslistComponent},
  {path: 'mesas/:paramId', component: MesaShowComponent},
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
    MesaShowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
