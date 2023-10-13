import {ChangeDetectorRef, Component, DoCheck, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatchService} from "../../services/match.service";
import {Point} from "../../../../shared/models/point.model";

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent {

  matchId: string = '';

  @Input() points: Point[] = [];


  constructor(route: ActivatedRoute, private matchService: MatchService, private cdRef: ChangeDetectorRef) {
    route.url.subscribe(data => this.matchId = data.toString().slice(data.toString().lastIndexOf('/')))

    this.getPoints();
  }

  getPoints(){

    this.matchService.getMatchPoints(Number.parseInt(this.matchId)).subscribe((data) => {
      this.points.push(...data)
    })


    this.matchService.getRealTimeMatchPoints(Number.parseInt(this.matchId)).onmessage = (data) =>  {
      this.points.push(JSON.parse(data.data) as Point)
      this.cdRef.detectChanges();

    };
  }

}
