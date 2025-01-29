import { Component } from '@angular/core';
import {
  FormsModule,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RegisterService } from './register.service';
import { OauthComponent } from '../../../components/oauth/oauth.component';

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
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  error: string = '';

  email: FormControl = new FormControl('', [
    Validators.email,
    Validators.required,
  ]);
  username: FormControl = new FormControl('', [
    Validators.minLength(4),
    Validators.required,
  ]);
  password: FormControl = new FormControl('', [
    Validators.minLength(8),
    Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
  ]);
  passwordConfirm: FormControl = new FormControl('', [
    Validators.minLength(8),
    Validators.required,
  ]);

  constructor(private registerService: RegisterService) {
  }

  register() {
    console.log(this.email)
    console.log(this.password)

    this.error = '';

    let response: any = this.registerService.register(
      this.email.value,
      this.username.value,
      this.password.value
    );

    if (response.error) {
      this.error = response.error;
      return;
    }
  }
}
