import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public userService: UserService, public router: Router) {}

  ngOnInit(): void {
    this.router;
    console.log('this.router: ', this.router);
  }
}
