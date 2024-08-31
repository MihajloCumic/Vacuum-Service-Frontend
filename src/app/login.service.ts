import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtRes } from './models/JwtModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly loginUrl: string = 'http://localhost:8081/auth/login';

  constructor(private httpClient: HttpClient) { }

  login(email: string, password:string): Observable<JwtRes>{
    let body = {email, password};
    return this.httpClient.post<JwtRes>(this.loginUrl, body);
  }
}
