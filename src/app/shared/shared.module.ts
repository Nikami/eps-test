import { NgModule } from '@angular/core';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';
import { MaterialModule } from './material/material.module';

const COMPONENTS = [CollapsibleComponent];

@NgModule({
  imports: [MaterialModule],
  exports: [MaterialModule, ...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class SharedModule {}
