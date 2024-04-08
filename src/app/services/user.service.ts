import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<any>({});
  currentUser = this.user.asObservable();

  constructor() { }

  updateUser(newUser: any) {
    this.user.next(newUser);
  }
}
