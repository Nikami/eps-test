import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { ProductsFilterService } from '../core/services/products-filter.service';
import {
  AdditionalFilter,
  CrossFilter,
  DefaultFilter
} from '../shared/filter/filter';
import { MS_FORM_FIELDS_DELAY } from '../shared/models/constants';

const enum FILTERS {
  SEARCH = 'search',
  PRICE = 'price',
  DELIVERY_DATE = 'delivery_date'
}

const MIN_CHARS_SEARCH = 3;

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFilterComponent implements OnInit, OnDestroy {
  public filterControls = {
    search: new FormControl(),
    price: new FormControl(),
    delivery_date: new FormControl()
  };
  public total$ = new BehaviorSubject<string>('0 items');

  private subscriptions = new Set<Subscription>();

  constructor(private productsFilterService: ProductsFilterService) {}

  ngOnInit(): void {
    this.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.clearSubscriptions();
  }

  private initSubscriptions(): void {
    this.subscribeToFilteredProducts();
    this.subscribeToSearch();
    this.subscribeToPrice();
    this.subscribeToDeliveryDate();
  }

  private clearSubscriptions(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  private subscribeToFilteredProducts(): void {
    this.subscriptions.add(
      this.productsFilterService.getFilteredProducts().subscribe(products => {
        const declension: string = products.length === 1 ? 'item' : 'items';
        this.total$.next(`${products.length} ${declension}`);
      })
    );
  }

  private subscribeToSearch(): void {
    this.subscriptions.add(
      this.filterControls.search.valueChanges
        .pipe(
          debounceTime(MS_FORM_FIELDS_DELAY),
          tap((searchValue: string) => {
            this.handleSearchFieldValue(searchValue);
          })
        )
        .subscribe()
    );
  }

  private subscribeToPrice(): void {
    this.subscriptions.add(
      this.filterControls.price.valueChanges
        .pipe(
          debounceTime(MS_FORM_FIELDS_DELAY),
          tap((price: number) => {
            this.handleAddFieldValue(price, FILTERS.PRICE, { price });
          })
        )
        .subscribe()
    );
  }

  private subscribeToDeliveryDate(): void {
    this.subscriptions.add(
      this.filterControls.delivery_date.valueChanges
        .pipe(
          debounceTime(MS_FORM_FIELDS_DELAY),
          tap((delivery_date: Date) => {
            this.handleAddFieldValue(delivery_date, FILTERS.DELIVERY_DATE, {
              delivery_date
            });
          })
        )
        .subscribe()
    );
  }

  private handleSearchFieldValue(value: string): void {
    if (value.length >= MIN_CHARS_SEARCH) {
      this.productsFilterService.addFilter(
        FILTERS.SEARCH,
        new CrossFilter(
          ['title', 'description'],
          value.toLowerCase().trim(),
          false
        )
      );
    } else if (value.length === 0) {
      this.productsFilterService.removeFilter(FILTERS.SEARCH);
    }
  }

  private handleAddFieldValue(
    value: number | Date,
    name: FILTERS,
    filter: DefaultFilter
  ): void {
    const strValue: string = String(value === null ? '' : value);

    if (strValue.length > 0) {
      this.productsFilterService.addFilter(name, new AdditionalFilter(filter));
    } else {
      this.productsFilterService.removeFilter(name);
    }
  }
}
