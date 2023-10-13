import {User} from "./user.model";
import {MatchPlayer} from "./match-player.model";

export class Match {

  constructor(public id: number, public finished: boolean, public referee: User, public matchPlayers: MatchPlayer[], public teamASets: number, public teamBSets: number) {
  }

}
