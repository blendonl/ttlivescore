import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {MatchService} from "../../services/match.service";
import {Match} from "../../../../shared/models/match.model";

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent {

  @Input() matches: Match[] = []

  constructor(private matchService: MatchService, private cdr: ChangeDetectorRef) {

    this.matchService.addPlayer(1).subscribe(da => {}, onerror => {
      console.log(onerror)
    })
    this.getMatches()
  }


  savePoint() {

    this.matches.push(...this.matches)



  }

  getMatches() {
    this.matchService.getMatches().subscribe((data) => {
      console.log(data)
      this.matches.push(...data)
    })

    this.matchService.getRealTimeMatchSets().onmessage = (event) => {

      this.matches = JSON.parse(event.data) as Match[]

      console.log(this.matches)

      this.cdr.detectChanges()
    }
  }

  onRowClicked(index: number) {
    let match = this.matches[index];

  }

}
