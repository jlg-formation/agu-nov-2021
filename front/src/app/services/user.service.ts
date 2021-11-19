import { Observable, of, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  afterLoginRoute = '/';
  user$ = new BehaviorSubject<User | undefined>(undefined);

  constructor() {
    this.user$.subscribe((user) => {
      if (!user) {
        this.afterLoginRoute = '/';
      }
    });
  }

  disconnect() {
    this.user$.next(undefined);
    return of(undefined);
  }

  login(login: string, password: string): Observable<User> {
    password;
    const user = { login };
    this.user$.next(user);
    return of(user);
  }
}
