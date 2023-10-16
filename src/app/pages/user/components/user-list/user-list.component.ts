import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebSocketService } from 'src/app/core/services/websocket.service';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from '../../services/users.service';
import {A} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  users: User[] = []
  image: string| ArrayBuffer | null = new ArrayBuffer(0);

  constructor(private userService: UserService) {

    this.getUsers()
  }



  getUsers() {

    this.userService.getUsers().subscribe((data) => {
      (data as []).forEach((u :any) => this.users.push(new User(u.id, u.firstName, u.lastName, u.gender, u.brithDate, u.email, u.password, u.teamName, '')));
    })
  }

  onRowClick(index: number) {

  }


  saveUser() {
    let dataImage = 'favicon.ico';
    this.userService.readImage().subscribe(data => {



    })







  }


  doFileInput(event: FileList | null) {


    const reader = new FileReader();
    reader.onload = (e) => {



      // @ts-ignore
      this.image = e.target?.result;






       let user = new User(1, 'Sabrina ', 'Keller', 'F', new Date('12/27/1997'), 'sabrina@gmail.com', 'password', 'Team 2', e.target?.result)
       console.log(user)


       this.userService.saveUser(user).subscribe(data => { console.log(data)}, onerror => console.log(onerror) )









    }
    reader.readAsDataURL(new Blob([event?.item(0) ?? '']));


  }
}
