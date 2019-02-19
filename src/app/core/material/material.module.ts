import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatTableModule
} from '@angular/material';

const COMPONENT_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatTableModule
];

@NgModule({
  imports: [...COMPONENT_MODULES],
  exports: [...COMPONENT_MODULES]
})
export class MaterialModule {}
