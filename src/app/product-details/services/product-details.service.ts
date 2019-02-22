import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../../shared/models/product';
import { ProductsService } from '../../core/services/products.service';

@Injectable()
export class ProductDetailsService {
  private selectedProduct$ = new Subject<Product>();

  constructor(private productsService: ProductsService) {}

  get(): Observable<Product> {
    return this.selectedProduct$.asObservable();
  }

  select(product: Product): void {
    this.selectedProduct$.next(product);
  }

  update(product: Product): Observable<null | Error> {
    return this.productsService.update(product);
  }
}
