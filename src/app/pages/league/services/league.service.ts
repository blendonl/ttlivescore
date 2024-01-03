import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.dev';
import { League } from '../models/league.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  leagueUrl: string;

  constructor(private httpClient: HttpClient) {
    this.leagueUrl = 'leagues';
  }

  createLeague(league: { name: string; category: string }): Observable<League> {
    return this.httpClient
      .post<League>(
        `${environment.ttlivescoreApiUrl}/${this.leagueUrl}`,
        league,
      )
      .pipe();
  }
}
