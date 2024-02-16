import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false;
  email = '';

  login(email: string, password: string) {
    if (email === 'admin@mail.ru' && password === 'admin123456') {
      this.isAuth = true;
      this.email = email;
    } else {
      this.isAuth = false;
      this.email = '';
    }

    return this.isAuth;
  }
}
