import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.dev";

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
      return new EventSource(`${environment.ttlivescoreApiUrl}/${this.matchesUrl}/${matchId}/points/rt`);
    }

  getRealTimeMatchSets() {
    return new EventSource(`${environment.ttlivescoreApiUrl}/${this.matchesUrl}/set/rt`);
  }

    getMatchPoints(matchId: number) {
      return this.http.get<any>(`${environment.ttlivescoreApiUrl}/${this.matchesUrl}/${matchId}/points`).pipe();

    }

    savePoint(matchId: number, playerId: number, isTeamA: string, isSetWinner: string) {
      console.log(isSetWinner + ' ' + isTeamA)
      return this.http.post<any>(`${environment.ttlivescoreApiUrl}/${this.matchesUrl}/${matchId}`, {match: {id: matchId, referee: {id: 1}}, player: {id: playerId}, setWinner: isSetWinner, teamA: isTeamA})
    }

    getMatchById(matchId: number) {
      return this.http.get<any>(`${environment.ttlivescoreApiUrl}/${this.matchesUrl}/${matchId}`).pipe();
    }


}
