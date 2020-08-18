import { Injectable } from '@angular/core';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {
  currUser: User;

  constructor() { }

  getUser() {
    return this.currUser;
  }

  setUser(user: User) {
    this.currUser = user;
  }
}
