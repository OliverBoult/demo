import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';
import { ChartsHomeComponent } from './charts-home/charts-home.component';
import { ChartsInputComponent } from './charts-input/charts-input.component';

@NgModule({
  declarations: [
    ChartsHomeComponent, 
    ChartsInputComponent, 
    ChartComponent,
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    ChartsModule,
    ReactiveFormsModule,
  ],
})
export class ChartModule {}
