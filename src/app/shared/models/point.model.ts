import {User} from "./user.model";
import {Match} from "./match.model";

export class Point{

  constructor(public id: number, public match: Match, public player: User) {

  }

}
