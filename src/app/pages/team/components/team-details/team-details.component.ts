import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../../model/team.model';
import { TeamService } from '../../service/team.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { UserModule } from '../../../user/user.module';
import { HttpUserEvent } from '@angular/common/http';
import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-team-details',
  standalone: true,
  imports: [TableComponent, UserModule],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.scss',
})
export class TeamDetailsComponent implements OnInit {
  team: Team | undefined;
  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.team = await firstValueFrom(this.teamService.getById(id));
    this.users.next(this.team.users);
  }

  async userDelete(id: number) {
    await this.teamService.deleteUser(this.team?.id ?? 0, id);
  }
}
