import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Product } from '../shared/models/product';
import { MatTableDataSource } from '@angular/material';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsFilterService } from '../product-filter/services/products-filter.service';
import { ProductDetailsService } from '../product-details/services/product-details.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTableComponent implements OnInit, OnDestroy {
  public dataSource: MatTableDataSource<Product>;
  public displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'price',
    'delivery_date'
  ];
  public hasNoData: Observable<boolean> = of(true);
  public selectedProductId: number;

  private productsSubscription: Subscription;

  constructor(
    private productsFilterService: ProductsFilterService,
    private productDetailsService: ProductDetailsService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscribeToProducts();
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }

  selectProduct(product: Product): void {
    if (this.selectedProductId === product.id) {
      this.selectedProductId = null;
      this.productDetailsService.select(null);
    } else {
      this.selectedProductId = product.id;
      this.productDetailsService.select(product);
    }
  }

  private subscribeToProducts(): void {
    this.productsSubscription = this.productsFilterService
      .getFilteredProducts()
      .subscribe((products: Product[]) => {
        this.createDataSource(products);
        this.cd.markForCheck();
      });
  }

  private createDataSource(products: Product[]): void {
    this.dataSource = new MatTableDataSource(products);
    this.hasNoData = this.dataSource.connect().pipe(map(ps => ps.length === 0));
  }
}
