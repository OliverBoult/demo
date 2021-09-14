import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartsHomeComponent } from './charts-home/charts-home.component';
import { ChartsInputComponent } from './charts-input/charts-input.component';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChartsHomeComponent, ChartsInputComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  exports: [ChartsHomeComponent, ChartsInputComponent]
})
export class ChartModule { }
