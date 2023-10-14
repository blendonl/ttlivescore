import {Point} from "./point.model";

export class Set {

  constructor(public points: Point[], public teamAPoints: number, public teamBPoints: number, public teamAWinner: boolean) {
  }

}
