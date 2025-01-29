import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  register(email: string, username: string, password: string) {
    console.log('Register', email, password);
  }
}
