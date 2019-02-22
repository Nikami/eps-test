import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ProductDetailsService } from './services/product-details.service';
import { Product } from '../shared/models/product';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorResponse } from '../shared/models/error';
import { SpinnerService } from '../core/services/spinner.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  @HostBinding('class') classList =
    'mat-card d-flex w-100 flex-column justify-content-center position-relative';

  public form: FormGroup;
  public hasProductDetails$ = new BehaviorSubject<boolean>(false);
  public spinnerState: Observable<boolean>;

  private spinnerName = 'product_details';
  private product: Product;
  private subscriptions = new Set<Subscription>();

  constructor(
    private productDetailsService: ProductDetailsService,
    private fb: FormBuilder,
    private spinnerService: SpinnerService
  ) {
    this.spinnerService.addSpinner(this.spinnerName);
  }

  ngOnInit(): void {
    this.initSpinnerState();
    this.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.clearSubscriptions();
  }

  private initSpinnerState(): void {
    this.spinnerState = this.spinnerService.getSpinnerState(this.spinnerName);
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
      this.spinnerService.updateSpinnerState(this.spinnerName, true);
      this.spinnerService.updateSpinnerState('products', true);

      this.productDetailsService
        .update(Object.assign({}, this.product, formValue))
        .subscribe(
          () => {
            this.spinnerService.updateSpinnerState(this.spinnerName, false);
            this.spinnerService.updateSpinnerState('products', false);
          },
          (error: ErrorResponse) => {
            this.form.get(error.field).setErrors({
              max_price: error.message
            });
            this.spinnerService.updateSpinnerState(this.spinnerName, false);
            this.spinnerService.updateSpinnerState('products', false);
          }
        );
    }
  }
}
