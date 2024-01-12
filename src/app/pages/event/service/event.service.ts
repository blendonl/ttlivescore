import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.dev';
import { EventCreate } from '../model/event-create.model';
import { Tournament } from '../model/tournament/tournament.model';
import { TournamentCreate } from '../model/tournament/tournament-create.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  eventUrl = 'events';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<Event[]>(`${environment.ttlivescoreApiUrl}/${this.eventUrl}`)
      .pipe();
  }

  getById(id: string) {
    return this.http.get<Event>(
      `${environment.ttlivescoreApiUrl}/${this.eventUrl}/${id}`,
    );
  }

  saveEvent(event: EventCreate) {
    return this.http
      .post<Event>(`${environment.ttlivescoreApiUrl}/${this.eventUrl}`, event)
      .pipe();
  }

  saveTournament(event: TournamentCreate) {
    return this.http
      .post<Tournament>(
        `${environment.ttlivescoreApiUrl}/${this.eventUrl}/tournaments`,
        event,
      )
      .pipe();
  }

  deleteById(id: number) {
    return this.http
      .delete<any>(`${environment.ttlivescoreApiUrl}/${this.eventUrl}/${id}`)
      .pipe();
  }
}
