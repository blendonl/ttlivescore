import { Component, OnInit, signal } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { League } from '../../models/league.model';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TeamListComponent } from '../../../team/components/team-list/team-list.component';
import { AsyncPipe } from '@angular/common';
import { Team } from '../../../team/model/team.model';

@Component({
  selector: 'app-league-details',
  standalone: true,
  imports: [TeamListComponent, AsyncPipe],
  templateUrl: './league-details.component.html',
  styleUrl: './league-details.component.scss',
})
export class LeagueDetailsComponent implements OnInit {
  league: League | null = null;
  constructor(
    private leagueService: LeagueService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.league = await this.getLeague(id);
    this.league.teams = await this.getTeams();
  }

  async getLeague(id: number) {
    return await firstValueFrom(this.leagueService.getLeagueById(id));
  }

  async getTeams() {
    return await firstValueFrom(
      this.leagueService.getAllTeams(this.league?.id ?? 0),
    );
  }
}
