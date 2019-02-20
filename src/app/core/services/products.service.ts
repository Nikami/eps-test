import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../shared/models/product';
import { delay } from 'rxjs/operators';

const TIMESTAMP_DELIMITER = 1000;

function timestampToDate(timestamp) {
  return new Date(timestamp * TIMESTAMP_DELIMITER);
}

const products: Product[] = [
  {
    id: 1,
    title: 'Bosch',
    description: 'BOSCH KGN39VI35',
    price: 15587.0,
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
  }
];

@Injectable()
export class ProductsService {
  private MS_DELAY = 1300;

  get(): Observable<Product[]> {
    return of(products).pipe(delay(this.MS_DELAY));
  }
}
