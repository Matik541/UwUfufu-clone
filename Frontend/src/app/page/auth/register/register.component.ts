import { Component } from '@angular/core';
import {
  FormsModule,
  FormControl,
  Validators,
  AbstractControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RegisterService } from './register.service';

@Component({
  selector: 'auth-register',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
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
    this.email.valueChanges.subscribe((value) => {
      let response: any = this.registerService.checkEmail(value);
      if (response.error) {
        this.error = response.error;
      }
    });
  }

  register() {
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
