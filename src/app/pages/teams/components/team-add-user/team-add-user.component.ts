import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { User } from '../../../../shared/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user/services/users.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-team-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './team-add-user.component.html',
  styleUrl: './team-add-user.component.scss',
})
export class TeamAddUserComponent implements OnInit {
  addPlayerFormGroup: FormGroup;
  users: BehaviorSubject<User[]>;
  teamId: number;
  allUsers: User[];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) {
    this.teamId = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
    this.addPlayerFormGroup = new FormGroup<any>({
      user: new FormControl(''),
    });
    this.users = new BehaviorSubject<User[]>([]);
    this.allUsers = [];
  }

  async ngOnInit() {
    this.users.next(
      await firstValueFrom(this.userService.getAllByNotTeamId(this.teamId)),
    );

    this.allUsers = this.users.value;
  }

  addPlayer() {}

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
