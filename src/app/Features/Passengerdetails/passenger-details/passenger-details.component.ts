import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from 'src/app/Service/flight.service';
import { FlightRequest } from '../../Models/Add-Flight-Request.model';
import { BookingdetailsService } from 'src/app/Service/bookingdetails.service';
import { BookingRequest } from '../../Models/Booking-details.model';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent {

  constructor(private bookingservice:BookingdetailsService,private formBuilder:FormBuilder){}
AddpassengerForm!:FormGroup;
bookingdetails:BookingRequest= new BookingRequest;

ngOnInit(): void {
  this.AddpassengerForm = this.formBuilder.group({
    aeroId:['',[Validators.required]],
    from_city:['',[Validators.required]],
    to_city:['',[Validators.required]],
    fare:['',[Validators.required]],
    Name:['',[Validators.required]],
    Gender:['',[Validators.required]],
    Age:['',[Validators.required]],
  });
}
onSubmit():void{
if(this.AddpassengerForm.valid)
{
  this.bookingdetails=this.AddpassengerForm.value;

  this.bookingservice.addbooking(this.bookingdetails).subscribe(
    (response:any) => {
      console.log("Congratulations your filght has been booked:",response);
    },
    (error:any)=>{
      console.log("sorry cannot book your Flight:",error);
    }
    );
  }
}
}
