import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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
  private appliedFilters: Filters = {};
  private filteredProducts$ = new BehaviorSubject<Product[]>([]);

  constructor(
    private productsService: ProductsService,
    private spinnerService: SpinnerService
  ) {
    this.spinnerService.addSpinner(this.spinnerName);
  }

  getFilteredProducts(): Observable<Product[]> {
    this.spinnerService.updateSpinnerState(this.spinnerName, true);

    return this.productsService.get().pipe(
      switchMap((ps: Product[]) => {
        this.updateFilteredProducts(ps);
        this.spinnerService.updateSpinnerState(this.spinnerName, false);
        return this.filteredProducts$.asObservable();
      })
    );
  }

  updateFilteredProducts(products: Product[]): void {
    this.products = products;
    this.handleAppliedFilters();
  }

  addFilter(name: string, filter: Filter): void {
    this.appliedFilters = Object.assign({}, this.appliedFilters, {
      [name]: filter
    });
    this.handleAppliedFilters();
  }

  removeFilter(field: string): void {
    const { [field]: filter, ...filters } = this.appliedFilters;
    this.appliedFilters = { ...filters };
    this.handleAppliedFilters();
  }

  private handleAppliedFilters(): void {
    const filterKeys = Object.keys(this.appliedFilters);

    if (filterKeys.length > 0) {
      let products: Product[] = this.products;

      filterKeys.forEach((fk: string) => {
        products = products.filter(
          this.appliedFilters[fk].comparatorFn.bind(this.appliedFilters[fk])
        );
      });

      this.filteredProducts$.next(products);
    } else {
      this.filteredProducts$.next(this.products);
    }
  }
}
