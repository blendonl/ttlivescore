import {ChangeDetectorRef, Component,  Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatchService} from "../../services/match.service";
import {Point} from "../../../../shared/models/point.model";
import {Match} from "../../../../shared/models/match.model";

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent {

  matchId: string = '';
  match: Match | undefined;

  sets: Point[][] = []
  teamAPoints: number[] = []
  teamBPoints: number[] = []

  @Input() points: Point[] = [];


  constructor(route: ActivatedRoute, private matchService: MatchService, private cdRef: ChangeDetectorRef) {
    route.url.subscribe(data => this.matchId = data.toString().slice(data.toString().lastIndexOf('/')))

    this.getPoints();
    matchService.getMatchById(Number.parseInt(this.matchId)).subscribe(match => this.match = match);

  }

  getPoints(){

    this.matchService.getMatchPoints(Number.parseInt(this.matchId)).subscribe((data) => {
      this.points.push(...data)
      this.getAllSets();
    })






    this.matchService.getRealTimeMatchPoints(Number.parseInt(this.matchId)).onmessage = (data) =>  {
      this.points.push(JSON.parse(data.data) as Point)
      this.getAllSets()
      this.cdRef.detectChanges();

    };
  }


  getAllSets() {


    let setIndexes = this.points.map((point,index) => {
      if(point.setWinner)
        return index
      return -1;
    }).filter(value => value !== -1);

    let lastIndex = 0;


    setIndexes.forEach(ind => {
      this.sets.push(this.points.slice(lastIndex, ind+1))
      lastIndex = ind + 1;
    });

    if(lastIndex < this.points.length)
      this.sets.push(this.points.slice(lastIndex, this.points.length + 1))


  }

}
