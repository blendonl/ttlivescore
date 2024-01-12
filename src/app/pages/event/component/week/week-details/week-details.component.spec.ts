import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDetailsComponent } from './week-details.component';

describe('WeekDetailsComponent', () => {
  let component: WeekDetailsComponent;
  let fixture: ComponentFixture<WeekDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeekDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
