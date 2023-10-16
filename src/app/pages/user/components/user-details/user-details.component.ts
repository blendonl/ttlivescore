import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/users.service';
import { User } from 'src/app/shared/models/user.model';
import {MatchService} from "../../../match/services/match.service";
import {Match} from "../../../../shared/models/match.model";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  user: User | undefined

  matches: Match[] = []

  constructor(private route: ActivatedRoute, private userService: UserService, private matchServices: MatchService) {
    matchServices.getMatchesByUserId('1').subscribe(data => {
      this.matches.push(data)
      this.matches.push(...this.matches)
      this.matches.push(...this.matches)
      this.matches.push(...this.matches)
    })
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
