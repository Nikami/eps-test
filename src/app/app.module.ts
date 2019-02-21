import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { SharedModule } from './shared/';
import { ProductsFilterService } from './product-filter/services/products-filter.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsService } from './product-details/services/product-details.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    ProductFilterComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [ProductsFilterService, ProductDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
