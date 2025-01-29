import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-oauth',
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './oauth.component.html',
  styleUrl: './oauth.component.scss'
})
export class OauthComponent {

}
