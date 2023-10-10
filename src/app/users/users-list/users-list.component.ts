import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/users.service';
import { WebSocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  users: User[] = []

  constructor(private userService: UserService, private webSocketService: WebSocketService, private router: Router) {

    this.getUsers()
  }



  getUsers() {

    this.webSocketService.connect().subscribe()

    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      

      (data as []).forEach((u :any) => this.users.push(new User(u.firstName, u.lastName, u.email, u.password, u.teamName)))
    })
  }

  onRowClick(index: number) {

    this.router.navigateByUrl('users/' + (index + 1))

  }
  


}
