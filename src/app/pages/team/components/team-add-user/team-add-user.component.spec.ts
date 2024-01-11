import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAddUserComponent } from './team-add-user.component';

describe('TeamAddUserComponent', () => {
  let component: TeamAddUserComponent;
  let fixture: ComponentFixture<TeamAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamAddUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
