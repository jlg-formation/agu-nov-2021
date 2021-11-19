import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, map, Subject, takeUntil } from 'rxjs';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  _destroy$ = new Subject<boolean>();
  color$ = interval(1000).pipe(
    map((x) => x % 2),
    map((x) => (x ? 'red' : 'green')),
    takeUntil(this._destroy$)
  );
  f = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  message = '';

  constructor(private userService: UserService, private router: Router) {
    this.color$.subscribe({
      next: (str) => {
        console.log('str: ', str);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
  }

  ngOnInit(): void {}

  submit() {
    console.log('submit');
    this.userService
      .login(this.f.value.login, this.f.value.password)
      .subscribe({
        next: (user) => {
          console.log('user: ', user);
          this.router.navigateByUrl(this.userService.afterLoginRoute);
        },
        error: (err) => {
          console.log('err: ', err);
        },
      });
  }

  updateMessage(str: string) {
    this.message = str;
  }
}
