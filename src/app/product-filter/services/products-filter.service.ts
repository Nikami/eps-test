import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProductsService } from '../../core/services/products.service';
import { Filter } from '../../shared/models/filter';
import { SpinnerService } from '../../core/services/spinner.service';

interface Filters {
  [key: string]: Filter;
}

@Injectable()
export class ProductsFilterService {
  private spinnerName = 'products';
  private products: Product[] = [];
  private filteredProducts$ = new BehaviorSubject<Product[]>([]);
  private appliedFilters$ = new BehaviorSubject<Filters>({});

  constructor(
    private productsService: ProductsService,
    private spinnerService: SpinnerService
  ) {
    this.spinnerService.addSpinner(this.spinnerName);
    this.subscribeToProducts();
    this.subscribeToAppliedFilters();
  }

  getFilteredProducts(): Observable<Product[]> {
    return this.filteredProducts$.asObservable();
  }

  addFilter(name: string, filter: Filter): void {
    this.appliedFilters$.next(
      Object.assign({}, this.appliedFilters$.value, {
        [name]: filter
      })
    );
  }

  removeFilter(field: string): void {
    const { [field]: filter, ...rest } = this.appliedFilters$.value;
    this.appliedFilters$.next(rest);
  }

  private subscribeToProducts(): void {
    this.spinnerService.updateSpinnerState(this.spinnerName, true);
    this.productsService
      .get()
      .pipe(
        tap((ps: Product[]) => {
          this.products = ps;
          this.appliedFilters$.next(this.appliedFilters$.value);
          this.spinnerService.updateSpinnerState(this.spinnerName, false);
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
