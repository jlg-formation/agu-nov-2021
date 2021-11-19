import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  device$ = new BehaviorSubject<string>('unknown');

  constructor() {
    console.log('instantiate viewport');
    const onResize = () => {
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      const str = vw > 500 ? 'desktop' : 'mobile';
      this.device$.next(str);
    };

    onResize();

    window.addEventListener('resize', onResize);

    this.device$.pipe(distinctUntilChanged()).subscribe((str) => {
      console.log('str: ', str);
      document.body.classList.remove('desktop');
      document.body.classList.remove('mobile');
      document.body.classList.add(str);
    });
  }
}
