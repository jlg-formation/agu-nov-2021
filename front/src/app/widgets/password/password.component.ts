import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  showPassword$ = new BehaviorSubject<boolean>(false);

  icon = faEyeSlash;

  constructor(private elt: ElementRef<HTMLElement>) {
    this.showPassword$
      .pipe(distinctUntilChanged())
      .subscribe((showPassword) => {
        this.icon = showPassword ? faEye : faEyeSlash;
        const input = elt.nativeElement.querySelector('input');
        if (!input) {
          return;
        }
        input.type = showPassword ? 'text' : 'password';
      });
  }

  ngOnInit(): void {}

  select() {
    this.showPassword$.next(true);
  }
  deselect() {
    this.showPassword$.next(false);
  }
}
