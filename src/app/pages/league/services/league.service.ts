import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.dev';
import { League } from '../models/league.model';
import { catchError, Observable, of } from 'rxjs';
import { LeagueShort } from '../models/league.short.model';
import { Team } from '../../team/model/team.model';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  leagueUrl: string;

  constructor(private httpClient: HttpClient) {
    this.leagueUrl = 'leagues';
  }

  createLeague(league: {
    name: string;
    category: string;
  }): Observable<LeagueShort> {
    return this.httpClient
      .post<LeagueShort>(
        `${environment.ttlivescoreApiUrl}/${this.leagueUrl}`,
        league,
      )
      .pipe();
  }

  getAllLeagues(): Observable<LeagueShort[]> {
    return this.httpClient
      .get<LeagueShort[]>(`${environment.ttlivescoreApiUrl}/${this.leagueUrl}`)
      .pipe();
  }

  getLeagueById(id: number): Observable<League> {
    return this.httpClient
      .get<League>(`${environment.ttlivescoreApiUrl}/${this.leagueUrl}/${id}`)
      .pipe();
  }

  deleteById(id: number) {
    return this.httpClient
      .delete(`${environment.ttlivescoreApiUrl}/${this.leagueUrl}/${id}`)
      .pipe();
  }

  addTeam(id: number, teamName: string) {
    return this.httpClient
      .post(`${environment.ttlivescoreApiUrl}/${this.leagueUrl}/${id}/teams`, {
        teamName: teamName,
      })
      .pipe(
        catchError((err, caught) => {
          return of(err);
        }),
      );
  }

  getAllTeams(id: number) {
    return this.httpClient
      .get<Team[]>(
        `${environment.ttlivescoreApiUrl}/${this.leagueUrl}/${id}/teams`,
      )
      .pipe();
  }
}
