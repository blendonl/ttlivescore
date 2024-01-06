import { Component, signal } from '@angular/core';
import { TeamService } from '../../service/team.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { TeamsComponent } from '../teams/teams.component';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from '../../../league/services/league.service';

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

  constructor(
    private teamService: TeamService,
    private leagueService: LeagueService,
    private route: ActivatedRoute,
  ) {
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
      let id = Number(this.route.snapshot.paramMap.get('id') ?? '0');

      if (id != 0) {
        await this.addToLeague(id, team?.name);
      }
    }
  }

  async addToLeague(id: number, teamName: string) {
    return await firstValueFrom(this.leagueService.addTeam(id, teamName));
  }
}
