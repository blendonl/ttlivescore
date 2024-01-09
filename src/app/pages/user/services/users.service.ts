import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { User } from '../../../shared/models/user.model';
import { UserCreate } from '../models/user-create.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersUrl = 'users';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<User[]>(`${environment.ttlivescoreApiUrl}/${this.usersUrl}`)
      .pipe();
  }

  getById(id: string) {
    return this.http.get<any>(
      `${environment.ttlivescoreApiUrl}/${this.usersUrl}/${id}`,
    );
  }

  saveUser(user: UserCreate) {
    // let formData = new FormData();
    return this.http
      .post<any>(`${environment.ttlivescoreApiUrl}/${this.usersUrl}`, user)
      .pipe();
  }
  readImage() {
    return this.http.get('assets/favicon.ico').pipe();
  }

  deleteById(id: number) {
    return this.http
      .delete<any>(`${environment.ttlivescoreApiUrl}/${this.usersUrl}/${id}`)
      .pipe();
  }
}
