import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekListComponent } from './week-list.component';

describe('WeekListComponent', () => {
  let component: WeekListComponent;
  let fixture: ComponentFixture<WeekListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeekListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
