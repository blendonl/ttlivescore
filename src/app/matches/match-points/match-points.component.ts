import { Component } from '@angular/core';
import {MatchService} from "../../services/match.service";

@Component({
  selector: 'app-match-points',
  templateUrl: './match-points.component.html',
  styleUrls: ['./match-points.component.scss']
})
export class MatchPointsComponent {

  constructor(private matchService: MatchService) {

    this.sendPoint();
  }

  sendPoint() {

    this.matchService.savePoint(1).subscribe(data => {
      console.log(data)

    }, onerror => {
      console.log(onerror)
    })

  }

}
