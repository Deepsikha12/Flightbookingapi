import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "../Service/login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class TokenInterceptor {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('your-backend-api-url/Login', { email, password });
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('token');
    // Optionally, you might want to navigate the user to the login page or do other cleanup here
  }
}
