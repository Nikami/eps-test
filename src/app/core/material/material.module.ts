import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';

const COMPONENT_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatTooltipModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatTableModule
];

@NgModule({
  imports: [...COMPONENT_MODULES],
  exports: [...COMPONENT_MODULES],
  providers: [MatDatepickerModule]
})
export class MaterialModule {}
