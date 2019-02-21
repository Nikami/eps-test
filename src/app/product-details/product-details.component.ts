import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ProductDetailsService } from './services/product-details.service';
import { Product } from '../shared/models/product';
import { BehaviorSubject, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorResponse } from '../shared/error/error';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  @HostBinding('class') classList =
    'mat-card d-flex w-100 flex-column justify-content-center';

  public form: FormGroup;
  public hasProductDetails$ = new BehaviorSubject<boolean>(false);

  private product: Product;
  private subscriptions = new Set<Subscription>();

  constructor(
    private productDetailsService: ProductDetailsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.clearSubscriptions();
  }

  private initSubscriptions(): void {
    this.subscribeToProductDetails();
  }

  private clearSubscriptions(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  private createForm(): void {
    this.form = this.fb.group(
      {
        title: [this.product.title, Validators.required],
        description: [this.product.description, Validators.required],
        price: [this.product.price, Validators.required],
        delivery_date: [
          this.product.delivery_date.toISOString(),
          Validators.required
        ]
      },
      {
        updateOn: 'blur'
      }
    );
  }

  private subscribeToProductDetails(): void {
    this.subscriptions.add(
      this.productDetailsService.get().subscribe((product: Product) => {
        this.product = product;

        if (product) {
          this.createForm();
          this.subscribeToFormChanges();
        }

        this.hasProductDetails$.next(!!product);
      })
    );
  }

  private subscribeToFormChanges(): void {
    this.form.valueChanges.subscribe((value: any) => {
      this.updateProductDetails(value);
    });
  }

  private updateProductDetails(formValue: any): void {
    if (this.form.valid) {
      this.productDetailsService
        .update(Object.assign(this.product, formValue))
        .subscribe(null, (error: ErrorResponse) => {
          this.form.get(error.field).setErrors({
            max_price: error.message
          });
        });
    }
  }
}
