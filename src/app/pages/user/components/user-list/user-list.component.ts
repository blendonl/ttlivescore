import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from '../../services/users.service';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { D } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input() users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  @Input() userProperties: [key: string, value: string][];
  @Input() createRoute: string;

  constructor(private userService: UserService) {
    this.userProperties = [
      ['id', 'Id'],
      ['firstName', 'First Name'],
      ['lastName', 'Last Name'],
      ['email', 'Email'],
      ['birthDate', 'Date of Birth'],
      ['roles', 'Role'],
      ['gender', 'Gender'],
      ['teamName', 'Team Name'],
    ];

    this.createRoute = 'create';
  }
  async ngOnInit() {}

  deleteUser(id: number) {
    this.onDelete.emit(id);
  }
}
