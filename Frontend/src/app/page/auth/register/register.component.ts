import { Component, signal } from '@angular/core';
import {
  FormsModule,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RegisterService } from './register.service';
import { OauthComponent } from '../../../components/oauth/oauth.component';
import { MatIconModule } from '@angular/material/icon';
import { merge } from 'rxjs';
import { response } from 'express';

@Component({
  selector: 'auth-register',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    OauthComponent,
    MatIconModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  error = {
    email: signal(''),
    updateEmail: () => {
      this.signUpForm.get('email');
      if (this.signUpForm.get('email')!.hasError('required'))
        this.error.email.set('You must enter a value');
      else if (this.signUpForm.get('email')!.hasError('email'))
        this.error.email.set('Not a valid email');
      else this.error.email.set('');
    },
    username: signal(''),
    updateUsername: () => {
      this.signUpForm.get('username');
      if (this.signUpForm.get('username')!.hasError('required'))
        this.error.username.set('You must enter a value');
      else if (this.signUpForm.get('username')!.hasError('minlength'))
        this.error.username.set('Username must be at least 4 characters');
      else this.error.username.set('');
    },
    password: signal(''),
    updatePassword: () => {
      this.signUpForm.get('password');
      if (this.signUpForm.get('password')!.hasError('required'))
        this.error.password.set('You must enter a value');
      else if (this.signUpForm.get('password')!.hasError('minlength'))
        this.error.password.set('Password must be at least 8 characters');
      else if (this.signUpForm.get('password')!.hasError('pattern'))
        this.error.password.set(
          'Password must contain at least one uppercase letter, one lowercase letter, and one number'
        );
      else this.error.password.set('');
    },
    response: '',
  };

  hide: boolean = true;

  signUpForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    username: new FormControl('', [
      Validators.minLength(4),
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/g),
      Validators.required,
    ]),
  });

  constructor(private registerService: RegisterService) {
    merge(
      this.signUpForm.get('email')!.statusChanges,
      this.signUpForm.get('email')!.valueChanges
    ).subscribe(() => this.error.updateEmail());

    merge(
      this.signUpForm.get('username')!.statusChanges,
      this.signUpForm.get('username')!.valueChanges
    ).subscribe(() => this.error.updateUsername());

    merge(
      this.signUpForm.get('password')!.statusChanges,
      this.signUpForm.get('password')!.valueChanges
    ).subscribe(() => this.error.updatePassword());
  }

  register() {
    // TODO: Implement register
  }
}
