import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../shared/models/product';
import { delay } from 'rxjs/operators';
import { MS_API_DELAY } from '../../shared/models/constants';

const TIMESTAMP_DELIMITER = 1000;

function timestampToDate(timestamp): Date {
  const date = new Date(timestamp * TIMESTAMP_DELIMITER);
  date.setHours(0, 0, 0);
  return date;
}

const products: Product[] = [
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

@Injectable()
export class ProductsService {
  get(): Observable<Product[]> {
    return of(products).pipe(delay(MS_API_DELAY));
  }
}
