import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../../shared/models/product';
import { ProductsService } from '../../core/services/products.service';
import { ProductsFilterService } from '../../product-filter/services/products-filter.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class ProductDetailsService {
  private selectedProduct$ = new Subject<Product>();

  constructor(
    private productsService: ProductsService,
    private productsFilterService: ProductsFilterService
  ) {}

  get(): Observable<Product> {
    return this.selectedProduct$.asObservable();
  }

  select(product: Product): void {
    this.selectedProduct$.next(product);
  }

  update(product: Product): Observable<Product[] | Error> {
    return this.productsService
      .update(product)
      .pipe(
        tap((ps: Product[]) =>
          this.productsFilterService.updateFilteredProducts(ps)
        )
      );
  }
}
