import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_BASE_URL } from '../consts/api-url.const';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    @Inject(API_BASE_URL) private apiUrl: string
  ) { }

  public login(email: string, password: string): Observable<boolean> {
    const url = `${this.apiUrl}/login`;
    const body = {
      email,
      password
    };

    return this.http.post(url, body).pipe(
      map((response) => !!response)
    );
  }
}
