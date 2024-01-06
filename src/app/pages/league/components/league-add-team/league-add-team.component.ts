import { Component, OnInit, signal } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { BehaviorSubject, firstValueFrom, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Team } from '../../../team/model/team.model';
import { TeamService } from '../../../team/service/team.service';

@Component({
  selector: 'app-league-add-team',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, AsyncPipe],
  templateUrl: './league-add-team.component.html',
  styleUrl: './league-add-team.component.scss',
})
export class LeagueAddTeamComponent implements OnInit {
  id: number;
  teams: BehaviorSubject<Team[]>;
  allTeams: Team[];

  isSubmitted: BehaviorSubject<boolean>;

  message: BehaviorSubject<string>;

  addTeamFormGroup: FormGroup;

  constructor(
    private leagueService: LeagueService,
    private teamService: TeamService,
    private route: ActivatedRoute,
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.addTeamFormGroup = new FormGroup<any>({
      team: new FormControl('Choose team'),
    });
    this.teams = new BehaviorSubject<Team[]>([]);
    this.allTeams = [];
    this.isSubmitted = new BehaviorSubject<boolean>(false);
    this.message = new BehaviorSubject<string>('');
  }

  async ngOnInit() {
    this.teams.next(await this.getAllTeams());
    this.allTeams = this.teams.value;
  }

  async addTeam() {
    let team = await firstValueFrom(
      this.leagueService.addTeam(
        this.id,
        this.addTeamFormGroup.get('team')?.value,
      ),
    );

    this.isSubmitted.next(true);

    if (team.error) {
      this.message.next('Team already on the League or has a League');
    } else {
      this.message.next('Team added successfully');
    }
  }

  async getAllTeams() {
    return await firstValueFrom(this.teamService.getAll());
  }

  searchChange(event: any) {
    let value = event.target.value;

    this.teams.next(this.allTeams.filter((t) => t.name.includes(value)));
  }
}
