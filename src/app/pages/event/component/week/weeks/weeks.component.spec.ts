import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeksComponent } from './weeks.component';

describe('WeeksComponent', () => {
  let component: WeeksComponent;
  let fixture: ComponentFixture<WeeksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeeksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
