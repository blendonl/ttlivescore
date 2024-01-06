import { Component, Input, OnInit } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { BehaviorSubject, firstValueFrom, Observable, Subject } from 'rxjs';
import { LeagueRoutingModule } from '../../league-routing.module';
import { League } from '../../models/league.model';
import { NgClass } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LeagueShort } from '../../models/league.short.model';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss'],
})
export class LeagueListComponent implements OnInit {
  @Input() leagues: BehaviorSubject<LeagueShort[]> = new BehaviorSubject<
    LeagueShort[]
  >([]);

  constructor(
    private leagueService: LeagueService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.leagues.next(await this.getAllLeagues());
  }

  async getAllLeagues() {
    return await firstValueFrom(this.leagueService.getAllLeagues());
  }

  async deleteLeague(id: number) {
    let tempLeagues = this.leagues.value;

    this.leagues.next(
      tempLeagues.splice(
        tempLeagues.findIndex((v) => v.id === id),
        1,
      ),
    );
    await firstValueFrom(this.leagueService.deleteById(id));
  }
}
