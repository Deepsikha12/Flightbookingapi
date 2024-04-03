import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

import { BookingRequest } from '../Features/Models/Booking-details.model';

@Injectable({
  providedIn: 'root'
})
export class BookingdetailsService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  addbooking(model : BookingRequest): Observable<void>
  {
    return this.http.post<any>(`${environment.apiBaseUrl}/api/UserDetails/BookingDetails`, model) .pipe(
      map(response => response.message))
  };
}
