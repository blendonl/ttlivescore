import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, first, firstValueFrom } from 'rxjs';
import { User } from '../../../../shared/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user/services/users.service';
import { AsyncPipe } from '@angular/common';
import { SearchSelectComponent } from '../../../../shared/components/search-select/search-select.component';
import { TeamService } from '../../service/team.service';

@Component({
  selector: 'app-team-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, SearchSelectComponent],
  templateUrl: './team-add-user.component.html',
  styleUrl: './team-add-user.component.scss',
})
export class TeamAddUserComponent implements OnInit {
  addPlayerFormGroup: FormGroup;
  users: BehaviorSubject<User[]>;
  teamId: number;
  allUsers: User[];
  properties: string[];

  constructor(
    private userService: UserService,
    private teamService: TeamService,
    private route: ActivatedRoute,
  ) {
    this.teamId = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
    this.addPlayerFormGroup = new FormGroup<any>({
      user: new FormControl(''),
    });
    this.users = new BehaviorSubject<User[]>([]);
    this.allUsers = [];
    this.properties = ['firstName', 'lastName', 'email'];
  }
  async ngOnInit() {
    this.users.next(
      await firstValueFrom(this.userService.getAllByNotTeamId(this.teamId)),
    );

    this.allUsers = this.users.value;
  }

  async addPlayer() {
    let userId = this.addPlayerFormGroup.get('user')?.value;

    if (!userId) {
      console.log('bad');
      return;
    }

    let team = await firstValueFrom(
      this.teamService.addUser(this.teamId, userId),
    );

    if (team.error) {
      console.log(team.error.message);
      return;
    }

    console.log('Team added succesfully');
  }

  searchChange(key: any) {
    let value = key.target.value;

    this.users.next(
      this.allUsers.filter(
        (i) =>
          i.firstName.includes(value) ||
          i.lastName.includes(value) ||
          i.email.includes(value),
      ),
    );
  }
}
