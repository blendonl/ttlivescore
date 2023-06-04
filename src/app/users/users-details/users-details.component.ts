import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent {

  user: User | undefined

  constructor(private route: ActivatedRoute, private userService: UserService) { 
  }

  ngOnInit(): void {

    let id: string = this.route.snapshot.paramMap.get('id') ?? ''

    this.getUser(id)
    

  }

  getUser(id: string) {

    this.userService.getUser(id).subscribe((data: User) => {
      this.user = data;

      
    })

  }

}
