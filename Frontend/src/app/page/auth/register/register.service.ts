import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  checkEmail(email: string): boolean {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  register(email: string, username: string, password: string) {
    console.log('Register', email, password);
  }
}
