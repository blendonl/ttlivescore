import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  users: User[] = []

  constructor(private userService: UserService) {

    this.getUsers()
  }

  getUsers() {

    this.userService.getUsers().subscribe((data) => {

      (data as []).forEach((u :any) => this.users.push(new User(u.firstName, u.lastName, u.email, u.password, u.teamName)))


    })

    

  }
  


}
