import { Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from './login.service';
import { MatIconModule } from '@angular/material/icon';
import { OauthComponent } from '../../../components/oauth/oauth.component';
import { merge } from 'rxjs';

@Component({
  selector: 'auth-login',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    OauthComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  error = {
    email: signal(''),
    updateEmail: () => {
      this.signInForm.get('email');
      if (this.signInForm.get('email')!.hasError('required'))
        this.error.email.set('You must enter a value');
      else this.error.email.set('');
    },
    password: signal(''),
    updatePassword: () => {
      this.signInForm.get('password');
      if (this.signInForm.get('password')!.hasError('required'))
        this.error.password.set('You must enter a value');
      else this.error.password.set('');
    },
    response: '',
  };

  signInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private loginService: LoginService) {
    merge(
      this.signInForm.get('email')!.statusChanges,
      this.signInForm.get('email')!.valueChanges
    ).subscribe(() => this.error.updateEmail());

    merge(
      this.signInForm.get('password')!.statusChanges,
      this.signInForm.get('password')!.valueChanges
    ).subscribe(() => this.error.updatePassword());
  }

  login() {
    // TODO: Implement login
  }
}
