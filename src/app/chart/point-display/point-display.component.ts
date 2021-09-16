import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-display',
  templateUrl: './point-display.component.html',
  styleUrls: ['./point-display.component.css'],
})
export class PointDisplayComponent implements OnInit {
  @Input() xValue: number;
  @Input() yValue: number;

  constructor() {}

  ngOnInit(): void {}
}
