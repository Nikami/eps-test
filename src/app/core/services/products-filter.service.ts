import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { ProductsService } from './products.service';
import { CrossFilter, Filter } from '../../shared/filter/filter';

export interface Filters {
  [key: string]: Filter;
}

@Injectable()
export class ProductsFilterService {
  private products: Product[] = [];
  private filteredProducts$ = new BehaviorSubject<Product[]>([]);
  private appliedFilters$ = new BehaviorSubject<Filters>({});

  constructor(private productsService: ProductsService) {
    this.subscribeToProducts();
    this.subscribeToAppliedFilters();
  }

  getFilteredProducts(): Observable<Product[]> {
    return this.filteredProducts$.asObservable();
  }

  applyFilters(filters: Filters): void {
    this.appliedFilters$.next(filters);
  }

  private subscribeToProducts(): void {
    this.productsService
      .get()
      .pipe(
        first(),
        tap(ps => {
          this.products = ps;
          this.filteredProducts$.next(ps);
        })
      )
      .subscribe();
  }

  private subscribeToAppliedFilters(): void {
    this.appliedFilters$.subscribe((filters: Filters) => {
      const filterKeys = Object.keys(filters);

      if (filterKeys.length > 0) {
        let products = this.products;
        let unionAdditionalFilter = {};

        filterKeys.forEach(fk => {
          if (filters[fk] instanceof CrossFilter) {
            products = this.filter(filters[fk], products);
          } else {
            unionAdditionalFilter = Object.assign(
              filters[fk],
              unionAdditionalFilter
            );
          }
        });

        if (Object.keys(unionAdditionalFilter).length > 0) {
          products = this.filter(unionAdditionalFilter, products);
        }

        this.filteredProducts$.next(products);
      } else {
        this.filteredProducts$.next(this.products);
      }
    });
  }

  private filter(filter: Filter, products: Product[]): Product[] {
    if (filter instanceof CrossFilter) {
      return products.filter(filter.comparatorFn.bind(filter));
    } else {
      // TODO: rewrite this
      return products.filter(product => {
        const fields: string[] = Object.keys(filter);
        return fields.every(field => filter[field] === product[field]);
      });
    }
  }
}
