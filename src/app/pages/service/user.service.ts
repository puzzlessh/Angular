import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(authToken: string): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3001/users', {}).pipe(
      catchError((error) => {
        console.error('Ошибка получения пользователей:', error);
        return throwError(error);
      }),
    );
  }
}
