import { Injectable } from '@angular/core';
import { UserModel } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authenticated = false;

  constructor() { }

  client: UserModel[] = [
    {
      phone: '+79204605265',
      password: '12345678',
      userType: 'client'
    }
  ];

  inspectors: UserModel[] = [
    {
      phone: '+79204605266',
      password: '123456789',
      userType: 'inspector'
    }
  ];

  login(): void {
    this.authenticated = true;
  }

  logout(): void {
    this.authenticated = false;
  }

  currentUser(): UserModel {
    return {
      phone: '+79204605265',
      password: '12345678',
      userType: 'client'
    }
  }

}
