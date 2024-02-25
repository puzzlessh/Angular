import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    this.authToken = localStorage.getItem('Token');
  }
  get isAuth() {
    return !!this.authToken;
  }

  email = '';
  authToken: null | string = null;

  login(email: string, password: string) {
    const body = { email, password };

    return this.http
      .post<{ token: string }>('http://localhost:3001/login', body)
      .pipe(
        tap((res) => {
          this.authToken = res.token;
          this.email = email;
          localStorage.setItem('Token', this.authToken);
        }),
      );
  }
}
