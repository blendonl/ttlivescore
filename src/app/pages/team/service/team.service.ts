import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../model/team.model';
import { environment } from '../../../../environments/environment.dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  teamUrl: string;

  constructor(private httpClient: HttpClient) {
    this.teamUrl = 'teams';
  }

  createLeague(team: { name: string; category: string }): Observable<Team> {
    return this.httpClient
      .post<Team>(`${environment.ttlivescoreApiUrl}/${this.teamUrl}`, team)
      .pipe();
  }

  getAllTeams(): Observable<Team[]> {
    return this.httpClient
      .get<Team[]>(`${environment.ttlivescoreApiUrl}/${this.teamUrl}`)
      .pipe();
  }

  getLeagueById(id: number): Observable<Team> {
    return this.httpClient
      .get<Team>(`${environment.ttlivescoreApiUrl}/${this.teamUrl}/${id}`)
      .pipe();
  }

  deleteById(id: number) {
    return this.httpClient
      .delete(`${environment.ttlivescoreApiUrl}/${this.teamUrl}/${id}`)
      .pipe();
  }
}
