import {
  HttpRequest,
  HttpEvent,
  HttpHandlerFn,
  HttpEventType,
} from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) {
  const authToken = inject(AuthService).authToken;

  let testReq = req;

  if (authToken) {
    testReq = testReq.clone({
      headers: req.headers.set('Authorization', authToken),
    });
  }

  return next(testReq).pipe(
    catchError((err) => {
      if (err.status === 401) {
        console.log('error 401');
      }
      return throwError(err);
    }),
  );
}
