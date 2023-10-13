import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.dev";
import {Point} from "../../../shared/models/point.model";

@Injectable({
  providedIn: "root"
})
export class MatchService {

    matchesUrl= 'match'
    users: string = 'users'
    constructor(private http: HttpClient) { }

    getMatches()  {
      return this.http.get<any>(`${environment.ttlivescoreApiUrl}/${this.matchesUrl}`).pipe()
    }

    getMatchesByUser(userId: string) {
      return this.http.get<any>(`${environment.ttlivescoreApiUrl}/${this.users}/${userId}/matches`)
    }

    getRealTimeMatchPoints(matchId: number) {
      const event = new EventSource(`${environment.ttlivescoreApiUrl}/${this.matchesUrl}/${matchId}/point/rt`)

      return event;
    }

  getRealTimeMatchSets() {
    const event = new EventSource(`${environment.ttlivescoreApiUrl}/${this.matchesUrl}/set/rt`)

    return event;
  }

    getMatchPoints(matchId: number) {
      return this.http.get<any>(`${environment.ttlivescoreApiUrl}/${this.matchesUrl}/${matchId}`).pipe();

    }

    savePoint(matchId: number, playerId: number) {
      return this.http.post<any>(`${environment.ttlivescoreApiUrl}/${this.matchesUrl}/${matchId}`, {match: {id: matchId, referee: {id: 1}}, player: {id: playerId}, setWinner: true})
    }


}
