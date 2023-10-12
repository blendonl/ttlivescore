import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import {User} from "../models/user.model";
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Injectable({
    providedIn: 'root'
  })
export class WebSocketService {
    private socket: WebSocketSubject<any>;

    constructor() {
      this.socket = webSocket('ws://localhost:8080/ws')
    }

    public connect() : WebSocketSubject<any>{
      return this.socket
    }

    public sendMessage(message: {id: number, player: User, match: {id: number, finished: boolean, referee: User}}): void {
      this.socket.next(JSON.stringify(message));
    }
}
