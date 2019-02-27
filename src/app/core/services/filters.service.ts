import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FiltersService {
  private readonly filters$ = new BehaviorSubject<OrderFilters>({});

  get filters(): Observable<OrderFilters> {
    return this.filters$.asObservable().pipe(cleanupBlank());
  }

  update(filters: OrderFilters): void {
    this.filters$.next(filters);
  }
}

export interface OrderFilters {
  deliveryDate?: Date;
  searchQuery?: string;
  maxPrice?: number;
}

function cleanupBlank() {
  return (source: Observable<{ [key: string]: any }>) =>
    source.pipe(
      map(obj =>
        Object.keys(obj).reduce(
          (result, key) =>
            Object.assign(result, obj[key] ? { [key]: obj[key] } : {}),
          {}
        )
      )
    );
}
