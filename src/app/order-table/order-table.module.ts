import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTableComponent } from './order-table.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [OrderTableComponent],
  exports: [OrderTableComponent]
})
export class OrderTableModule {}
