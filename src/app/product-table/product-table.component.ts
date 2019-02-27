import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Product } from '../shared/models/product';
import { MatTableDataSource } from '@angular/material';
import { Observable, of, Subject } from 'rxjs';
import { map, takeWhile, takeUntil } from 'rxjs/operators';
import { ProductsFilterService } from '../product-filter/services/products-filter.service';
import { ProductDetailsService } from '../product-details/services/product-details.service';
import { SpinnerService } from '../core/services/spinner.service';

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
  public spinnerState: Observable<boolean>;

  private alive = true;
  private readonly destroyed$ = new Subject<boolean>();

  constructor(
    private productsFilterService: ProductsFilterService,
    private productDetailsService: ProductDetailsService,
    private spinnerService: SpinnerService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initSpinnerState();
    this.subscribeToProducts();
  }

  ngOnDestroy(): void {
    this.alive = false;
    this.destroyed$.next();
    this.destroyed$.complete();
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

  private initSpinnerState(): void {
    this.spinnerState = this.spinnerService.getSpinnerState('products');
  }

  private subscribeToProducts(): void {
    this.productsFilterService
      .getFilteredProducts()
      // .pipe(takeWhile(() => this.alive))
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (products: Product[]) => {
          console.log('subscribe');
          this.createDataSource(products);
          this.cd.markForCheck();
        },
        () => console.log('error'),
        () => console.log('complete')
      );
  }

  private createDataSource(products: Product[]): void {
    this.dataSource = new MatTableDataSource(products);
    this.hasNoData = this.dataSource.connect().pipe(map(ps => ps.length === 0));
  }
}
