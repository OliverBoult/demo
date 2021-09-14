import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'


@Component({
  selector: 'app-charts-input',
  templateUrl: './charts-input.component.html',
  styleUrls: ['./charts-input.component.css']
})
export class ChartsInputComponent implements OnInit {

  chartInput = new FormGroup({
    input: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

}
