import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { League } from '../../models/league.model';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-league-details',
  standalone: true,
  imports: [],
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
  }

  async getLeague(id: number) {
    return await firstValueFrom(this.leagueService.getLeagueById(id));
  }
}
