import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../model/team.model';
import { environment } from '../../../../environments/environment.dev';
import { BehaviorSubject, catchError, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  teamUrl: string;

  constructor(private httpClient: HttpClient) {
    this.teamUrl = 'teams';
  }

  create(team: { name: string }) {
    return this.httpClient
      .post<Team>(`${environment.ttlivescoreApiUrl}/${this.teamUrl}`, team)
      .pipe(
        catchError((err, caught) => {
          return of(err);
        }),
      );
  }

  getAll(): Observable<Team[]> {
    return this.httpClient
      .get<Team[]>(`${environment.ttlivescoreApiUrl}/${this.teamUrl}`)
      .pipe();
  }

  getById(id: number): Observable<Team> {
    return this.httpClient
      .get<Team>(`${environment.ttlivescoreApiUrl}/${this.teamUrl}/${id}`)
      .pipe();
  }

  deleteById(id: number) {
    return this.httpClient
      .delete(`${environment.ttlivescoreApiUrl}/${this.teamUrl}/${id}`)
      .pipe();
  }

  async deleteUser(teamId: number, userId: number) {
    return this.httpClient
      .delete(
        `${environment.ttlivescoreApiUrl}/${this.teamUrl}/${teamId}/users/${userId}`,
      )
      .pipe();
  }
}
