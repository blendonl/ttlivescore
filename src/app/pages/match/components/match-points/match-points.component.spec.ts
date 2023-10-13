import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPointsComponent } from './match-points.component';

describe('MatchPointsComponent', () => {
  let component: MatchPointsComponent;
  let fixture: ComponentFixture<MatchPointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchPointsComponent]
    });
    fixture = TestBed.createComponent(MatchPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
