import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.dev';
import { Injectable } from '@angular/core';
import { WeekCreate } from '../model/week/week-create.model';
import { WeekShort } from '../model/week/week-short.model';
import { Week } from '../model/week/week.model';

@Injectable({ providedIn: 'root' })
export class WeekService {
  weekUrl = 'events/weeks';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<WeekShort[]>(`${environment.ttlivescoreApiUrl}/${this.weekUrl}`)
      .pipe();
  }

  getById(id: string) {
    return this.http.get<Week>(
      `${environment.ttlivescoreApiUrl}/${this.weekUrl}/${id}`,
    );
  }

  save(event: WeekCreate) {
    return this.http
      .post<WeekShort>(
        `${environment.ttlivescoreApiUrl}/${this.weekUrl}/tournaments`,
        event,
      )
      .pipe();
  }

  deleteById(id: number) {
    return this.http
      .delete<any>(`${environment.ttlivescoreApiUrl}/${this.weekUrl}/${id}`)
      .pipe();
  }
}
