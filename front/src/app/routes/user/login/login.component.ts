import { UserService } from './../../../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  f = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  submit() {
    console.log('submit');
    this.userService
      .login(this.f.value.login, this.f.value.password)
      .subscribe({
        next: (user) => {
          console.log('user: ', user);
        },
        error: (err) => {
          console.log('err: ', err);
        },
      });
  }
}
