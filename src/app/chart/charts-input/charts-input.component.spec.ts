import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsInputComponent } from './charts-input.component';

describe('ChartsInputComponent', () => {
  let component: ChartsInputComponent;
  let fixture: ComponentFixture<ChartsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
