import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';
import { MaterialModule } from './material/material.module';
import { SpinnerComponent } from './components/spinner/spinner.component';

const COMPONENTS = [CollapsibleComponent, SpinnerComponent];

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, ...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class SharedModule {}
