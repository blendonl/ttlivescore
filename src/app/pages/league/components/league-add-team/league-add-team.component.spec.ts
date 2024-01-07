import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueAddTeamComponent } from './league-add-team.component';

describe('LeagueAddTeamComponent', () => {
  let component: LeagueAddTeamComponent;
  let fixture: ComponentFixture<LeagueAddTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueAddTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeagueAddTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
