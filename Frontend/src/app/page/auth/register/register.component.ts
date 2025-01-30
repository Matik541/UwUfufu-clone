import { Component } from '@angular/core';
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

  signUpForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
    ]),
    username: new FormControl('', [
      Validators.minLength(4),
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9]*$/),
    ]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
    ])
  });

  constructor(private registerService: RegisterService) {
  }

  register() {
    console.log(this.signUpForm.value);

    this.error = '';

    let response: any = this.registerService.register(
      this.signUpForm.value.email,
      this.signUpForm.value.username,
      this.signUpForm.value.password
    );

    if (response.error) {
      this.error = response.error;
      return;
    }
  }
}
