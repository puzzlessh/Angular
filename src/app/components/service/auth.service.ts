import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): boolean {
    return email === 'admin@mail.ru' && password === 'admin123456';
  }
}
