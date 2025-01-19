import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-navbar',
  imports: [SearchComponent, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
