import { Component } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss'],
})
export class LeagueListComponent {
  constructor(private leagueService: LeagueService) {}

  async getAllLeagues() {
    return firstValueFrom(this.leagueService.getAllLeagues());
  }
}
