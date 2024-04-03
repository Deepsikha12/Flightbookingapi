import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { UserDetails } from '../Features/Models/SignUp-Request.model';
import { environment } from 'src/environments/environment.development';
import {HttpClient,HttpHeaders} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class SignupService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  addSignup(model : UserDetails): Observable<void>
  {
    return this.http.post<any>(`${environment.apiBaseUrl}/api/UserDetails/AddSignup`, model) .pipe(
      map(response => response.message))
  };

  getUserInfo(): Observable<any> {

    return this.http.get<any>(`${environment.apiBaseUrl}/api/UserDetails/GetDetail?email`);
  };

  updateUserData(userData: any): Observable<any> {
    return this.http.put<any>(`${environment.apiBaseUrl}/api/UserDetails/UpdateSignup`, userData);
  }
}
