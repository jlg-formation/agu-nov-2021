import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisPipe } from './ellipsis.pipe';
import { AutofocusDirective } from './autofocus.directive';
import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [EllipsisPipe, AutofocusDirective, PasswordComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [EllipsisPipe, AutofocusDirective, PasswordComponent],
})
export class WidgetsModule {}
