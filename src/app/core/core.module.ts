import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from './services/products.service';

const CORE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [],
  imports: [CORE_MODULES],
  exports: [CORE_MODULES],
  providers: [ProductsService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import Core modules in the AppModule only.'
      );
    }
  }
}
