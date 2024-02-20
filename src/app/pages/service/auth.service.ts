import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isAuth = false;
  email = '';
  authToken = null;

  getToken(email: string, password: string): Observable<string> {
    const body = { email, password };
    return this.http.post<any>('http://localhost:3001/login', body).pipe(
      map((response) => {
        console.log(response);
        console.log('Token:', response.token);
        return response.token;
      }),
      catchError((error) => {
        console.error('error', error);
        return throwError(error);
      }),
    );
  }

  login(email: string, password: string) {
    // const body = { email, password };
    //console.log(this.http.post<any>('localhost:3001/login', body));
    // this.http.post<any>();
    // this.http.post<any>('http://localhost:3001/login', body).subscribe(
    //   (response) => {
    //     console.log(response);
    //     console.log('Token:', response.token);
    //     this.authToken = response.token;
    //   },
    //   (error) => {
    //     console.error('error', error);
    //   },
    // );

    if (email === 'admin@admin.ru' && password === 'admin') {
      this.isAuth = true;
      this.email = email;
    } else {
      this.isAuth = false;
      this.email = '';
    }

    return this.isAuth;
  }
}
