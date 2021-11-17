import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { AddComponent } from './add/add.component';
import { WidgetsModule } from '../../widgets/widgets.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StockComponent, AddComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    WidgetsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class StockModule {}
