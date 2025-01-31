import { Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { AuthComponent } from './page/auth/auth.component';
import { CreateComponent } from './page/create/create.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'create',
    component: CreateComponent
  }
];
