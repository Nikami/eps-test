import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

class Spinner {
  private isSpinning$ = new BehaviorSubject<boolean>(false);

  get isSpinning(): Observable<boolean> {
    return this.isSpinning$.asObservable();
  }

  run(): void {
    this.isSpinning$.next(true);
  }

  stop(): void {
    this.isSpinning$.next(false);
  }
}

@Injectable()
export class SpinnerService {
  private appliedSpinners$ = new BehaviorSubject<Spinner>(<Spinner>{});

  addSpinner(name: string): void {
    if (!this.appliedSpinners$.value.hasOwnProperty(name)) {
      this.appliedSpinners$.next(
        Object.assign({}, this.appliedSpinners$.value, {
          [name]: new Spinner()
        })
      );
    }
  }

  getSpinnerState(name: string): Observable<boolean> {
    return this.appliedSpinners$.value.hasOwnProperty(name)
      ? this.appliedSpinners$.value[name].isSpinning
      : of(false);
  }

  updateSpinnerState(name: string, isSpinning: boolean): void {
    if (this.appliedSpinners$.value.hasOwnProperty(name)) {
      if (isSpinning) {
        this.appliedSpinners$.value[name].run();
      } else {
        this.appliedSpinners$.value[name].stop();
      }
    }
  }
}
