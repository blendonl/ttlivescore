import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../../model/team.model';
import { TeamService } from '../../service/team.service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-team-details',
  standalone: true,
  imports: [],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.scss',
})
export class TeamDetailsComponent implements OnInit {
  team: Team | undefined;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.team = await this.getTeam(id);
  }

  async getTeam(id: number) {
    return await firstValueFrom(this.teamService.getById(id));
  }
}
