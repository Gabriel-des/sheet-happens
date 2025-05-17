import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_BASE_URL } from '../consts/api-url.const';
import { Observable, catchError, throwError } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    @Inject(API_BASE_URL) private apiUrl: string
  ) { }

  public login(email: string, password: string): Observable<LoginResponse> {
    const url = `${this.apiUrl}/login`;
    const body = {
      email,
      password
    };

    return this.http.post<LoginResponse>(url, body).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }
}
