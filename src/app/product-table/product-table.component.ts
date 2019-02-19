import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnInit
} from '@angular/core';
import { ProductsService } from '../core/services/products.service';
import { Product } from '../shared/models/product';
import { MatTableDataSource } from '@angular/material';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTableComponent implements OnInit {
  @HostBinding('class') classList = 'col-md-6';

  public dataSource = new MatTableDataSource([]);
  public displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'price',
    'delivery_date'
  ];
  public hasNoData: Observable<boolean> = of(true);

  private products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscribeToProducts();
  }

  subscribeToProducts(): void {
    this.productsService.get().subscribe(products => {
      this.products = products;
      this.createDataSource();
      this.cd.markForCheck();
    });
  }

  createDataSource(): void {
    this.dataSource = new MatTableDataSource(this.products);
    this.hasNoData = this.dataSource
      .connect()
      .pipe(map(products => products.length === 0));
  }
}
