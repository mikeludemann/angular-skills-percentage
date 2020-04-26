import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclePercentageComponent } from './circle-percentage.component';

describe('CirclePercentageComponent', () => {
  let component: CirclePercentageComponent;
  let fixture: ComponentFixture<CirclePercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirclePercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclePercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
