import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { Team } from '../../model/team.model';
import { TeamService } from '../../service/team.service';
import { TeamListComponent } from '../team-list/team-list.component';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [TeamListComponent],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
})
export class TeamsComponent implements OnInit {
  teams: Team[];

  constructor(private teamService: TeamService) {
    this.teams = [];
  }
  async ngOnInit() {
    this.teams = await this.getAllTeams();
  }

  async getAllTeams() {
    return await firstValueFrom(this.teamService.getAll());
  }
}
