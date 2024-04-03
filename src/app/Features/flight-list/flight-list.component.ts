import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/Service/flight.service';
import { FlightRequest } from '../Models/Add-Flight-Request.model';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit{


flist?:FlightRequest[];

  constructor(private flightlistservice:FlightService){}

  ngOnInit(): void {
    this.flightlistservice.getAllflights()
    .subscribe({
      next:(response)=>{
        this.flist=response;
      }
    });
  }
}
