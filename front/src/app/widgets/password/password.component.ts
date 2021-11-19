import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnChanges {
  @Input() color: string | null = 'inherit';
  icon = faEyeSlash;
  showPassword$ = new BehaviorSubject<boolean>(false);

  @Output() passwordEvent = new EventEmitter<'crypted' | 'clear'>();

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

        const str = showPassword ? 'clear' : 'crypted';
        this.passwordEvent.emit(str);
      });
  }

  deselect() {
    this.showPassword$.next(false);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ', changes);
    console.log('this.color: ', this.color);
    const input = this.elt.nativeElement.querySelector('input');
    console.log('input: ', input);
    if (!input) {
      return;
    }
    input.style.borderColor = this.color as string;
  }

  select() {
    this.showPassword$.next(true);
  }
}
