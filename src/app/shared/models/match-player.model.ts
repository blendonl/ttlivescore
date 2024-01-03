import {Match} from "./match.model";
import {User} from "./user.model";

export class MatchPlayer {

  constructor(public match: Match, public player: User, public double: boolean, public teamA: boolean) {
  }

}
