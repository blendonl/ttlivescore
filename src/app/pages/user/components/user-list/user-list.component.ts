import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from '../../services/users.service';
import { firstValueFrom } from 'rxjs';
import { D } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  image: string | ArrayBuffer | null = new ArrayBuffer(0);

  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.users = await this.getUsers();
    console.log(this.users);
  }

  getUsers() {
    return firstValueFrom(this.userService.getAll());
  }

  getUserProperties() {
    let user: User = {
      id: 1,
      firstName: '',
      lastName: '',
      profilePicture: new File([], ''),
      gender: '',
      birthDate: new Date(Date.now()),
      email: '',
      teamName: '',
    };
    return Object.getOwnPropertyNames(user);
  }

  onRowClick(index: number) {}

  saveUser() {
    let dataImage = 'favicon.ico';
    this.userService.readImage().subscribe((data) => {});
  }

  doFileInput(event: FileList | null) {
    let file = event?.item(0) as File;
    const reader = new FileReader();
    reader.onload = async (e) => {
      // @ts-ignore
      this.image = e.target?.result;

      // let user = new User(
      //   1,
      //   'Sabrina ',
      //   'Keller',
      //   'F',
      //   new Date('12/27/1997'),
      //   'sabrina@gmail.com',
      //   'password',
      //   'PriPing',
      //   file,
      // );
      // console.log(user);
      //
      // this.userService.saveUser(user).subscribe(
      //   (data) => {
      //     console.log(data);
      //   },
      //   (onerror) => console.log(onerror.headers),
      // );
    };

    reader.onerror = (err) => {
      console.log(err);
    };

    reader.readAsDataURL(file);
  }
}
