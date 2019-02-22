import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ProductDetailsService } from './services/product-details.service';
import { Product } from '../shared/models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorResponse } from '../shared/models/error';
import { SpinnerService } from '../core/services/spinner.service';
import { takeWhile } from 'rxjs/operators';

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

  private alive = true;
  private spinnerName = 'product_details';
  private product: Product;

  constructor(
    private productDetailsService: ProductDetailsService,
    private fb: FormBuilder,
    private spinnerService: SpinnerService
  ) {
    this.spinnerService.addSpinner(this.spinnerName);
  }

  ngOnInit(): void {
    this.initSpinnerState();
    this.subscribeToProductDetails();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  private initSpinnerState(): void {
    this.spinnerState = this.spinnerService.getSpinnerState(this.spinnerName);
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

    this.form.valueChanges
      .pipe(takeWhile(() => this.alive))
      .subscribe((value: any) => {
        this.updateProductDetails(value);
      });
  }

  private subscribeToProductDetails(): void {
    this.productDetailsService
      .get()
      .pipe(takeWhile(() => this.alive))
      .subscribe((product: Product) => {
        this.product = product;

        if (product) {
          this.createForm();
        }

        this.hasProductDetails$.next(!!product);
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
