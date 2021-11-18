import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, startWith, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss'],
})
export class LegalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(1000)
      .pipe(
        map((x) => x + 1),
        startWith(0),
        takeWhile((x) => x <= 5)
      )
      .subscribe({
        next: (x) => {
          console.log('x: ', x);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}
