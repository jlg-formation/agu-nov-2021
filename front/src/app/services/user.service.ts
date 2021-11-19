import { Observable, of, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$ = new BehaviorSubject<User | undefined>(undefined);

  constructor() {}

  login(login: string, password: string): Observable<User> {
    password;
    const user = { login };
    this.user$.next(user);
    return of(user);
  }
}
