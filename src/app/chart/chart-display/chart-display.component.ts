import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartPoint, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-display',
  templateUrl: './chart-display.component.html',
  styleUrls: ['./chart-display.component.css'],
})
export class ChartDisplayComponent implements OnInit, OnChanges {
  @ViewChild(BaseChartDirective, { static: true }) chart!: BaseChartDirective;
  @Input() xValue: number;
  @Input() yValue: number;

  public chartPoint: ChartPoint = {};

  public chartData: ChartDataSets[] = [
    {
      data: [this.chartPoint],
      label: 'My Point',
      pointRadius: 10,
    },
  ];

  public chartType: ChartType = 'scatter';

  public chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: -10,
            max: 10,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: -10,
            max: 10,
          },
        },
      ],
    },
  };

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.chartPoint.x = this.xValue;
    this.chartPoint.y = this.yValue;
    this.chart.update();
  }
}
