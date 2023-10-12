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

    const event = new EventSource('http://localhost:8080/match/1')

    event.onmessage = function (event) {
      console.log(event.data)
    }

    // this.webSocketService.connect().subscribe(data => {
    //   console.log(data)
    // })
    //
    // this.userService.getUsers().subscribe((data) => {
    //   console.log(data);
    //
    //
    //   (data as []).forEach((u :any) => this.users.push(new User(u.firstName, u.lastName, u.email, u.password, u.teamName)))
    // })
  }

  onRowClick(index: number) {

    this.router.navigateByUrl('users/' + (index + 1))

  }

  onSendClick() {

    let user: User = new User("ters", "", '', '', '');

    this.webSocketService.sendMessage({id: 1, player: user, match: {id:1, finished:false, referee: user}})

  }



}
