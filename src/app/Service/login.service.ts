import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserDetails } from '../Features/Models/SignUp-Request.model';
import { Login } from '../Features/Models/Login-Request.model';
import { LoginResponse } from '../Features/Login/login/login-respons.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient){ }

  login(request :Login):Observable<LoginResponse>{

    return this.http.post<LoginResponse>(`${environment.apiBaseUrl}/api/Login/Login`,{
      email:request.email,
      password:request.password
    });
  }


 /* private baseUrl : string = "https://localhost:5113/api/Login/"
private currentUserSource = new BehaviorSubject<Login | null>(null);
currentUser$ = this.currentUserSource.asObservable();
  [x: string]: any;

  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  login(Email: string, Password: string): Observable<any> {
    const userLogin = { email: Email, password: Password};
    return this.http.post<any>(`${environment.apiBaseUrl}/api/Login/Login`, userLogin)
    // .pipe(
    //   map(response => {
    //     //const user = response.user;
    //     localStorage.setItem('token', response.token);
    //     this.currentUserSource.next(response);
    //     return response;
    //   })
    // )
  }
  // Method to update login status
  updateLoginStatus(isLoggedIn: boolean): void {
    this.isLoggedInSubject.next(isLoggedIn);
  }

  constructor(private http: HttpClient) { }

  //addLogin(model : Login): Observable<void>
  //{
   // return this.http.post<any>(`${environment.apiBaseUrl}/api/Login/Login`, model) .pipe(
    //  map((response: { message: any; }) => response.message))
 // };*/
}
