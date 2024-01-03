import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatchService} from "../../services/match.service";
import {Match} from "../../../../shared/models/match.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-match-edit',
  templateUrl: './match-edit.component.html',
  styleUrls: ['./match-edit.component.scss']
})
export class MatchEditComponent implements OnInit {

  match: Match | undefined;
  addPointForm;





  constructor(route: ActivatedRoute, private matchService: MatchService, private cdRef: ChangeDetectorRef) {
    let matchId: string = '';
    route.url.subscribe(data => {
      let index = data.toString().lastIndexOf('/');
      matchId = data.slice(index-1, index).toString();
    });

    matchService.getMatchById(Number.parseInt(matchId)).subscribe(data => {
      this.match = data
    })

    this.addPointForm = new FormGroup({

      playersSelect: new FormControl('Select Player'),
      isSetWinner: new FormControl('')
    })

  }

  ngOnInit() {

    this.addPointForm.get('playersSelect')?.setValue('Select Player', {onlySelf: true})
  }


  onAddPointSubmit() {

    let playerSelectedEmail = this.addPointForm.get('playersSelect')?.value
    let isSetWinner: string = this.addPointForm.get('isSetWinner')?.value ?? 'false'

    console.log(isSetWinner)
    console.log(playerSelectedEmail)

    // let matchPlayer = this.match?.matchPlayers.find(matchPlayer =>  matchPlayer.player.email === playerSelectedEmail)

    // console.log(matchPlayer)

    this.matchService.savePoint(this.match?.id ?? 0,  0, '', isSetWinner ?? 'false').subscribe()



  }
}
