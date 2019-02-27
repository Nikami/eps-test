import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderFiltersComponent } from './order-filters.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  declarations: [OrderFiltersComponent],
  exports: [OrderFiltersComponent]
})
export class OrderFiltersModule {}
