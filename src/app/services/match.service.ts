import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.dev";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MatchService {

  usersUrl = 'match'

  constructor(private http: HttpClient) { }

  getMatches()  {
    return this.http.get<any>(`${environment.ttlivescoreApiUrl}/${this.usersUrl}/players`).pipe()
  }

  getMatch(id: string) {
    return this.http.get<any>(`${environment.ttlivescoreApiUrl}/${this.usersUrl}/${id}`)
  }

  savePoint(id: number) {
    console.log(id)
    return this.http.post<any>(`${environment.ttlivescoreApiUrl}/${this.usersUrl}/${id}`, { match: {id: 1}})
  }
}
