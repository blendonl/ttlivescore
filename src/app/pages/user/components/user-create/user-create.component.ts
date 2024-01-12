import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from '../../user-routing.module';
import { User } from '../../../../shared/models/user.model';
import { firstValueFrom } from 'rxjs';
import { UserService } from '../../services/users.service';
import { UserCreate } from '../../models/user-create.model';
import { Role } from '../../models/role.model';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
})
export class UserCreateComponent {
  formGroup: FormGroup;
  roles: [key: number, value: string][];

  constructor(private userService: UserService) {
    this.formGroup = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      gender: new FormControl(),
      role: new FormControl(),
      birthDate: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });

    this.roles = [
      ...Object.keys(Role)
        .filter((e) => !Number.isInteger(+e))
        .entries(),
    ];
  }

  async createUser() {
    let user: UserCreate = {
      firstName: this.formGroup.get('firstName')?.value,
      lastName: this.formGroup.get('lastName')?.value,
      gender: this.formGroup.get('gender')?.value,
      birthDate: this.formGroup.get('birthDate')?.value,
      email: this.formGroup.get('email')?.value,
      password: this.formGroup.get('password')?.value,
      role: this.formGroup.get('role')?.value,
    };

    await firstValueFrom(this.userService.saveUser(user));
  }
}
