import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FlightService } from 'src/app/Service/flight.service';
import { FlightRequest } from '../../Models/Add-Flight-Request.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateFlightRequest } from '../../Models/Update-Flight-Request.model';

@Component({
  selector: 'app-editflight',
  templateUrl: './editflight.component.html',
  styleUrls: ['./editflight.component.css']
})
export class EditflightComponent implements OnInit, OnDestroy {
  id: string | null = null;
  paramsSubscription?: Subscription;
  UpdateSubscription?: Subscription;
  flightDetails?: FlightRequest;
  flightForm: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private fb: FormBuilder,
    private router:Router
  ) {
    this.flightForm = this.fb.group({
      aeroId:['', Validators.required],
      aeroName: ['', Validators.required],
      from_city: ['', Validators.required],
      to_city: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      fare: ['', Validators.required],
      seatingCapacity: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        if (this.id) {
          this.flightService.getflightsById(this.id).subscribe({
            next: (response:any) => {
              this.flightDetails = response;
              this.populateForm();
            }
          });
        }
      }
    });
  }

  populateForm(): void {
    if (this.flightDetails) {
      this.flightForm.patchValue({
        aeroId:this.flightDetails.aeroId,
        aeroName: this.flightDetails.aeroName,
        from_city: this.flightDetails.from_city,
        to_city: this.flightDetails.to_city,
        departure: this.flightDetails.departure,
        arrival: this.flightDetails.arrival,
        fare: this.flightDetails.fare,
        seatingCapacity: this.flightDetails.seatingCapacity
      });
    }
  }

  onFormSubmit(): void {
    let updateFlight:UpdateFlightRequest={
      aeroName: this.flightForm.value.aeroName,
        from_city:this.flightForm.value.from_city,
        to_city:this.flightForm.value.to_city,
        departure: this.flightForm.value.departure,
        arrival: this.flightForm.value.arrival,
        fare: this.flightForm.value.fare,
        seatingCapacity: this.flightForm.value.seatingCapacity
    };

    if(this.id && this.flightForm.valid){
      this.flightDetails=this.flightForm.value;
      this.UpdateSubscription=this.flightService.updateflight(this.id,updateFlight).subscribe(
        {
          next:(response:any) =>{
            console.log("Flight Details Updated:",response);
            this.router.navigateByUrl('Get all Information')
          }
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.UpdateSubscription?.unsubscribe();
  }
}
