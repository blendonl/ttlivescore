import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.dev';
import { EventCreate } from '../model/event-create.model';
import { TournamentCreate } from '../model/tournament/tournament-create.model';
import { Tournament } from '../model/tournament/tournament.model';
import { Injectable } from '@angular/core';
import { TournamentShort } from '../model/tournament/tournament-short.model';

@Injectable({ providedIn: 'root' })
export class TournamentService {
  tournamentUrl = 'events/tournaments';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<TournamentShort[]>(
        `${environment.ttlivescoreApiUrl}/${this.tournamentUrl}`,
      )
      .pipe();
  }

  getById(id: string) {
    return this.http.get<Tournament>(
      `${environment.ttlivescoreApiUrl}/${this.tournamentUrl}/${id}`,
    );
  }

  save(event: TournamentCreate) {
    return this.http
      .post<Tournament>(
        `${environment.ttlivescoreApiUrl}/${this.tournamentUrl}/tournaments`,
        event,
      )
      .pipe();
  }

  deleteById(id: number) {
    return this.http
      .delete<any>(
        `${environment.ttlivescoreApiUrl}/${this.tournamentUrl}/${id}`,
      )
      .pipe();
  }
}
