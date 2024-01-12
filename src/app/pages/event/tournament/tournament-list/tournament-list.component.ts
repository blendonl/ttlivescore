import { Component, Input } from '@angular/core';
import { Tournament } from '../../../user/models/tournament.model';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { B } from '@angular/cdk/keycodes';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { TournamentShort } from '../../model/tournament-short.model';
import { TournamentService } from '../../service/tournament.service';

@Component({
  selector: 'app-tournament-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './tournament-list.component.html',
  styleUrl: './tournament-list.component.scss',
})
export class TournamentListComponent {
  @Input() tournaments: BehaviorSubject<TournamentShort[]>;
  @Input() properties: [key: string, value: string][];

  constructor(private tournamentService: TournamentService) {
    this.tournaments = new BehaviorSubject<TournamentShort[]>([]);
    this.properties = [];
  }

  async onDelete(id: number) {
    let err = await firstValueFrom(this.tournamentService.deleteById(id));

    console.log(err);
  }
}
