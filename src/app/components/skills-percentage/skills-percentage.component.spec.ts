import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsPercentageComponent } from './skills-percentage.component';

describe('SkillsPercentageComponent', () => {
  let component: SkillsPercentageComponent;
  let fixture: ComponentFixture<SkillsPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
