import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { User } from '../../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersUrl = 'users';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<any>(`${environment.ttlivescoreApiUrl}/${this.usersUrl}`)
      .pipe();
  }

  getById(id: string) {
    return this.http.get<any>(
      `${environment.ttlivescoreApiUrl}/${this.usersUrl}/${id}`,
    );
  }

  saveUser(user: User) {
    let formData = new FormData();
    formData.append('profilePicture', user.profilePicture);
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email);
    // formData.append('password', user.password);
    formData.append('gender', user.gender);
    formData.append('teamName', user.teamName);
    return this.http
      .post<any>(`${environment.ttlivescoreApiUrl}/${this.usersUrl}`, formData)
      .pipe();
  }
  readImage() {
    return this.http.get('assets/favicon.ico').pipe();
  }
}
