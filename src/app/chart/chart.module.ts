import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';
import { ChartsInputComponent } from './charts-input/charts-input.component';
import { PointDisplayComponent } from './point-display/point-display.component';
import { ChartDisplayComponent } from './chart-display/chart-display.component';

@NgModule({
  declarations: [
    ChartsInputComponent,
    ChartComponent,
    PointDisplayComponent,
    ChartDisplayComponent,
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    ChartsModule,
    ReactiveFormsModule,
  ],
})
export class ChartModule {}
