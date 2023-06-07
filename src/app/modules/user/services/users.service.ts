import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { environment } from "src/environments/environment.dev";

@Injectable({
    providedIn: "root"
})
export class UserService {

    usersUrl = 'users'

    constructor(private http: HttpClient) { }

    getUsers()  {
        return this.http.get<any>(`${environment.ttlivescoreApiUrl}/${this.usersUrl}/players`).pipe()
    }

    getUser(id: string) {
        return this.http.get<any>(`${environment.ttlivescoreApiUrl}/${this.usersUrl}/${id}`)
    }


}