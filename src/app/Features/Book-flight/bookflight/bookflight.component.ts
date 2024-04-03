import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlightRequest } from '../../Models/Add-Flight-Request.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/Service/flight.service';
import { BookingRequest } from '../../Models/Booking-details.model';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit, OnDestroy {
  id: string = '';
  paramsSubscription?: Subscription;
  UpdateSubscription?: Subscription;
  bookingDetails?: BookingRequest;
  bookForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      aeroId: ['', Validators.required],
      from_city: ['', Validators.required],
      to_city: ['', Validators.required],
      fare: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id') || '';

        if (this.id) {
          this.flightService.getflightsById(this.id).subscribe({
            next: (response: any) => {
              this.bookingDetails = response;
              this.populateForm();
            }
          });
        }
      }
    });
  }

  populateForm(): void {
    if (this.bookingDetails) {
      this.bookForm.patchValue({
        aeroId: this.bookingDetails.aeroId,
        from_city: this.bookingDetails.from_city,
        to_city: this.bookingDetails.to_city,
        fare: this.bookingDetails.fare,
      });
    }
  }
  

  Addpassengers(): void {
    // Implement functionality here
    this.router.navigateByUrl('Home/Search/Book Ticket/:id/Add Passenger')
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.UpdateSubscription?.unsubscribe();
  }
}


