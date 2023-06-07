import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebSocketService } from 'src/app/core/services/websocket.service';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

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
