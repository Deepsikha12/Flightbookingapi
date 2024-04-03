import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightRequest } from '../Features/Models/Add-Flight-Request.model';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UpdateFlightRequest } from '../Features/Models/Update-Flight-Request.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  addFlight(model : FlightRequest): Observable<void>
  {
    return this.http.post<any>(`${environment.apiBaseUrl}/api/Admin/AddFlightDetails`, model).pipe(
      map(response => response.message))
  };

  getAllflights(): Observable<FlightRequest[]>
  {
    return this.http.get<FlightRequest[]>(`${environment.apiBaseUrl}/api/Admin/GetFlightDetails`)
  }

  getflightsById(aeroId:string): Observable<FlightRequest>
  {
    return this.http.get<FlightRequest>(`${environment.apiBaseUrl}/api/Admin/GetFlightDetail?aeroId=${aeroId}`)
  }

  updateflight(aeroId:string,updateflight:UpdateFlightRequest):Observable<FlightRequest>
  {
    return this.http.put<FlightRequest>(`${environment.apiBaseUrl}/api/Admin/UpdateFlightDetails?aeroId=${aeroId}`,updateflight)
  }

  searchFlights(from_city: string, to_city: string): Observable<FlightRequest[]> {
    let params = new HttpParams();
    params = params.append('from_city', from_city);
    params = params.append('to_city', to_city);
    return this.http.get<FlightRequest[]>(`${environment.apiBaseUrl}/api/Search/SearchFlight?`, { params: params });
  }
}
