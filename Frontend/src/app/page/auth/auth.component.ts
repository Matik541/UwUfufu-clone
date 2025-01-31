import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-auth',
  imports: [MatCardModule, MatTabGroup, MatTab, RegisterComponent, LoginComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
