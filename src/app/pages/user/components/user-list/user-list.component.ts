import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from '../../services/users.service';

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
      (data as []).forEach((u :any) => this.users.push(new User(u.id, u.firstName, u.lastName, u.gender, u.brithDate, u.email, u.password, u.teamName, u.profilePicture)));
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


    let file = event?.item(0) as File;
    const reader = new FileReader();
    reader.onload = async (e) => {

      // @ts-ignore
      this.image = e.target?.result;





      let user = new User(1, 'Sabrina ', 'Keller', 'F', new Date('12/27/1997'), 'sabrina@gmail.com', 'password', 'T1', file)
      console.log(user)


      this.userService.saveUser(user).subscribe(data => {
        console.log(data)
      }, onerror => console.log(onerror.headers))


    }

    reader.onerror = (err => {

      console.log(err)

    })




    reader.readAsDataURL(file)



  }
}
