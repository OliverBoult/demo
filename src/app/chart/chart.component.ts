import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  chartForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.chartForm = this.fb.group({
      x: [1],
      y: [1],
    });
  }
}
