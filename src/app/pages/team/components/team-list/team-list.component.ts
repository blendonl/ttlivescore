import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from '../../service/team.service';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { Team } from '../../model/team.model';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.scss',
})
export class TeamListComponent implements OnInit {
  @Input() teams: Team[];

  constructor(private teamService: TeamService) {
    this.teams = [];
  }

  ngOnInit(): void {}

  deleteTeam(id: number) {}
}
