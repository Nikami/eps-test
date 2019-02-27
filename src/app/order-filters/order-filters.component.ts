import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { FiltersService } from '../core/services';

@Component({
  selector: 'app-order-filters',
  styleUrls: ['./order-filters.component.scss'],
  templateUrl: './order-filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderFiltersComponent {
  readonly filtersForm: FormGroup;

  constructor(filtersService: FiltersService, fb: FormBuilder) {
    this.filtersForm = fb.group({
      deliveryDate: [],
      searchQuery: [],
      maxPrice: []
    });

    this.filtersForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe(filters => filtersService.update(filters));
  }
}
