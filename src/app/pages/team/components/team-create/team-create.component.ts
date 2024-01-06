import { Component, signal } from '@angular/core';
import { TeamService } from '../../service/team.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { TeamsComponent } from '../teams/teams.component';

@Component({
  selector: 'app-team-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './team-create.component.html',
  styleUrl: './team-create.component.scss',
})
export class TeamCreateComponent {
  teamInput: FormGroup;
  isSubmitted: BehaviorSubject<boolean>;
  message: BehaviorSubject<string>;

  constructor(private teamService: TeamService) {
    this.teamInput = new FormGroup({
      name: new FormControl(''),
    });
    this.isSubmitted = new BehaviorSubject<boolean>(false);
    this.message = new BehaviorSubject<string>('');
  }

  async createTeam() {
    this.isSubmitted.next(true);

    let team = await firstValueFrom(
      this.teamService.create({
        name: this.teamInput.get('name')?.value,
      }),
    );

    if (team.error) {
      this.message.next('team already exist');
    } else {
      this.message.next('team created successfully');
    }
  }
}
