import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { combineLatest, map } from 'rxjs/operators';
import {
  FiltersService,
  OrderFilters,
  ProductsService
} from '../core/services';
import { Product } from '../shared/models/product';

@Component({
  selector: 'app-order-table',
  styleUrls: ['./order-table.component.scss'],
  templateUrl: './order-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderTableComponent {
  readonly hasNoData$: Observable<boolean>;
  readonly data$: Observable<Product[]>;

  constructor(
    private readonly filtersService: FiltersService,
    private readonly productService: ProductsService
  ) {
    this.data$ = this.productService.get().pipe(this.applyFilters());
    this.hasNoData$ = this.data$.pipe(map(data => data.length === 0));
  }

  applyFilters() {
    return (source: Observable<Product[]>) =>
      source.pipe(
        combineLatest(this.filtersService.filters),
        map(([products, filters]) => products.filter(applyForProduct(filters)))
      );
  }
}

// FILTERING. SHOULD BE PART OF A CUSTOM DATA SOURCE CLASS.

type ProductFilterFn = (p: Product, filter: any) => boolean;

const PRODUCT_FILTERS = new Map<keyof OrderFilters, ProductFilterFn>([
  ['deliveryDate', (p, deliveryDate) => p.delivery_date === deliveryDate],
  ['searchQuery', (p, searchQuery) => p.description.includes(searchQuery)],
  ['maxPrice', (p, maxPrice) => p.price <= maxPrice]
]);

function applyForProduct(filters: OrderFilters) {
  return (p: Product) =>
    Object.keys(filters).reduce((result, filterKey: keyof OrderFilters) => {
      return result && PRODUCT_FILTERS.get(filterKey)(p, filters[filterKey]); // ensures filter function is not invoked for false result
    }, true);
}
