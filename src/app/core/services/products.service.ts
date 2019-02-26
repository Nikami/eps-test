import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Product } from '../../shared/models/product';
import { delay, switchMap, tap } from 'rxjs/operators';
import {
  MS_API_DELAY,
  TIMESTAMP_DELIMITER
} from '../../shared/models/constants';
import { ErrorResponse } from '../../shared/models/error';

function timestampToDate(timestamp): Date {
  const date = new Date(timestamp * TIMESTAMP_DELIMITER);
  date.setHours(0, 0, 0);
  return date;
}

const MAX_PRICE = 16000;

function validatePrice(
  product: Product,
  onSuccess: Observable<Product[]>
): Observable<Product[] | Error> {
  if (product.price > MAX_PRICE) {
    return of(null).pipe(
      delay(MS_API_DELAY),
      switchMap(() =>
        throwError(new ErrorResponse('price', `Max price is ${MAX_PRICE}`))
      )
    );
  } else {
    return onSuccess;
  }
}

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      title: 'Bosch',
      description: 'BOSCH KGN39VI35',
      price: 15587,
      delivery_date: timestampToDate(1550580024)
    },
    {
      id: 2,
      title: 'Samsung',
      description: 'SAMSUNG RB29FSRNDSA/UA',
      price: 7000.0,
      delivery_date: timestampToDate(1550925624)
    },
    {
      id: 3,
      title: 'Snai',
      description: 'SNAIGE RF-390-1803AA',
      price: 7999.99,
      delivery_date: timestampToDate(1551271224)
    },
    {
      id: 4,
      title: 'Bosch',
      description: 'BOSCH I393',
      price: 7000.0,
      delivery_date: timestampToDate(1550580629)
    },

    {
      id: 5,
      title: 'Samsung',
      description: 'SAMSUNG DSA/DE',
      price: 7999.99,
      delivery_date: timestampToDate(1550580629)
    }
  ];

  get(): Observable<Product[]> {
    return of(this.products).pipe(delay(MS_API_DELAY));
  }

  update(product: Product): Observable<Product[] | Error> {
    const onSuccess: Observable<Product[]> = of(this.products).pipe(
      delay(MS_API_DELAY),
      tap(() => {
        const productIdx: number = this.products.findIndex(
          p => p.id === product.id
        );
        this.products[productIdx] = product;
      })
    );

    return validatePrice(product, onSuccess);
  }
}
