import { Component, OnInit } from '@angular/core';
import { TournamentListComponent } from '../tournament-list/tournament-list.component';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { Tournament } from '../../../model/tournament/tournament.model';
import { TournamentService } from '../../../service/tournament.service';
import { TournamentShort } from '../../../model/tournament/tournament-short.model';

@Component({
  selector: 'app-tournaments',
  standalone: true,
  imports: [TournamentListComponent],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.scss',
})
export class TournamentsComponent implements OnInit {
  tournaments: BehaviorSubject<TournamentShort[]>;
  properties: [key: string, value: string][];

  constructor(private tournamentService: TournamentService) {
    this.tournaments = new BehaviorSubject<TournamentShort[]>([]);
    this.properties = [
      ['id', 'Id'],
      ['name', 'Name'],
      ['category', 'Category'],
      ['gender', 'Gender'],
      ['date', 'Date'],
    ];
  }

  async ngOnInit() {
    this.tournaments.next(
      await firstValueFrom(this.tournamentService.getAll()),
    );
  }
}
