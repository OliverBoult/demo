import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-charts-input',
  templateUrl: './charts-input.component.html',
  styleUrls: ['./charts-input.component.css'],
})
export class ChartsInputComponent implements OnInit {
  @Input() pointForm: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
