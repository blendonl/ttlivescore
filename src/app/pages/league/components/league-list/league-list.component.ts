import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { firstValueFrom } from 'rxjs';
import { LeagueRoutingModule } from '../../league-routing.module';
import { League } from '../../models/league.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss'],
})
export class LeagueListComponent implements OnInit {
  leagues: League[] = [];

  constructor(private leagueService: LeagueService) {}

  async ngOnInit() {
    this.leagues = await this.getAllLeagues();
  }

  async getAllLeagues() {
    return await firstValueFrom(this.leagueService.getAllLeagues());
  }
}
