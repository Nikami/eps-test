import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import {
  Filters,
  ProductsFilterService
} from '../core/services/products-filter.service';
import { AdditionalFilter, CrossFilter, Filter } from '../shared/filter/filter';

interface ProductFilters extends Filters {
  search?: CrossFilter;
  price?: AdditionalFilter;
  delivery_date?: AdditionalFilter;
}

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFilterComponent implements OnInit, OnDestroy {
  public searchFormControl = new FormControl('');
  public priceFormControl = new FormControl('');
  public total$ = new BehaviorSubject<number>(0);

  private filteredProductsSubscription: Subscription;
  private searchControlSubscription: Subscription;
  private priceControlSubscription: Subscription;

  private filters: ProductFilters = {};

  constructor(private productsFilterService: ProductsFilterService) {}

  ngOnInit(): void {
    this.subscribeToFilteredProducts();
    this.subscribeToSearch();
    this.subscribeToPrice();
  }

  ngOnDestroy(): void {
    this.filteredProductsSubscription.unsubscribe();
    this.searchControlSubscription.unsubscribe();
    this.priceControlSubscription.unsubscribe();
  }

  private subscribeToFilteredProducts(): void {
    this.filteredProductsSubscription = this.productsFilterService
      .getFilteredProducts()
      .subscribe(products => this.total$.next(products.length));
  }

  private subscribeToSearch(): void {
    this.searchControlSubscription = this.searchFormControl.valueChanges
      .pipe(
        debounceTime(500),
        tap((searchValue: string) => {
          if (searchValue.length >= 3) {
            this.addFilter(
              'search',
              new CrossFilter(
                ['title', 'description'],
                searchValue.toLowerCase().trim(),
                false
              )
            );
          } else if (searchValue.length === 0) {
            this.removeFilter('search');
          }
        })
      )
      .subscribe();
  }

  private subscribeToPrice(): void {
    this.priceControlSubscription = this.priceFormControl.valueChanges
      .pipe(
        debounceTime(500),
        tap(price => {
          if (price !== null) {
            this.addFilter('price', { price });
          } else if (price === null) {
            this.removeFilter('price');
          }
        })
      )
      .subscribe();
  }

  private addFilter(field: string, filter: Filter): void {
    this.filters = Object.assign(
      {
        [field]: filter
      },
      this.filters
    );
    this.productsFilterService.applyFilters(this.filters);
  }

  private removeFilter(field: string): void {
    const { [field]: filter, ...rest } = this.filters;
    this.filters = rest;
    this.productsFilterService.applyFilters(this.filters);
  }
}
