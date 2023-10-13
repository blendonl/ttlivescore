import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/users.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
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
