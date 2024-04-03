import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/Service/flight.service';
import { FlightRequest } from '../../Models/Add-Flight-Request.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  flist: FlightRequest[] = [];
  filteredFlights: FlightRequest[] = [];
  from_city: string = '';
  to_city: string = '';
  flightSearchForm!: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor(
    private flightlistservice: FlightService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadFlights();
    this.flightSearchForm = this.formBuilder.group({
      from_city: [''],
      to_city: ['']
    });
  }

  loadFlights() {
    this.subscriptions.push(
      this.flightlistservice.getAllflights()
        .subscribe({
          next: (response) => {
            this.flist = response;
            this.filteredFlights = response;
          },
          error: (error) => {
            console.error('Error loading flights:', error);
          }
        })
    );
  }

  search() {
    const { from_city, to_city } = this.flightSearchForm.value;
    this.subscriptions.push(
      this.flightlistservice.searchFlights(from_city, to_city)
        .subscribe({
          next: (response:any) => {
            this.filteredFlights = response;
          },
          error: (error:any) => {
            console.error('Error searching flights:', error);
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
