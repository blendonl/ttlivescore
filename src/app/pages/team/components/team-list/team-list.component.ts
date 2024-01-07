import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from '../../service/team.service';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { Team } from '../../model/team.model';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LeagueService } from '../../../league/services/league.service';

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.scss',
})
export class TeamListComponent implements OnInit {
  @Input() teams: Team[];

  constructor(
    private teamService: TeamService,
    private leagueService: LeagueService,
    private route: ActivatedRoute,
  ) {
    this.teams = [];
  }

  ngOnInit(): void {}

  async deleteTeam(id: number) {
    let leagueId = Number(this.route.snapshot.paramMap.get('id') ?? 0);

    if (leagueId !== 0) {
      await this.deleteTeamFromLeague(leagueId, id);
      return;
    }

    await firstValueFrom(this.teamService.deleteById(id));
  }

  async deleteTeamFromLeague(leagueId: number, teamId: number) {
    await firstValueFrom(await this.leagueService.removeTeam(leagueId, teamId));
  }
}
