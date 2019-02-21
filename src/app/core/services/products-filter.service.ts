import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { ProductsService } from './products.service';
import { Filter } from '../../shared/filter/filter';

interface Filters {
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

  addFilter(name: string, filter: Filter): void {
    this.appliedFilters$.next(
      Object.assign(
        {
          [name]: filter
        },
        this.appliedFilters$.value
      )
    );
  }

  removeFilter(field: string): void {
    const { [field]: filter, ...rest } = this.appliedFilters$.value;
    this.appliedFilters$.next(rest);
  }

  private subscribeToProducts(): void {
    this.productsService
      .get()
      .pipe(
        first(),
        tap((ps: Product[]) => {
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
        let products: Product[] = this.products;

        filterKeys.forEach((fk: string) => {
          products = products.filter(
            filters[fk].comparatorFn.bind(filters[fk])
          );
        });

        this.filteredProducts$.next(products);
      } else {
        this.filteredProducts$.next(this.products);
      }
    });
  }
}
