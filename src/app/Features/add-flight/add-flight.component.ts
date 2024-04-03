import { Component } from '@angular/core';
import { FlightRequest } from '../Models/Add-Flight-Request.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from 'src/app/Service/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {


  constructor(private flightservice:FlightService,private formBuilder:FormBuilder){}
  flightAddForm!:FormGroup;
  flightdetails:FlightRequest= new FlightRequest;

  ngOnInit(): void {
    this.flightAddForm = this.formBuilder.group({
      aeroId:['',[Validators.required]],
      aeroName:['',[Validators.required]],
      from_city:['',[Validators.required]],
      to_city:['',[Validators.required]],
      departure:['',[Validators.required]],
      arrival:['',[Validators.required]],
      fare:['',[Validators.required]],
      seatingCapacity:['',[Validators.required]],
    });
  }
onSubmit():void{
  if(this.flightAddForm.valid)
  {
    this.flightdetails=this.flightAddForm.value;

    this.flightservice.addFlight(this.flightdetails).subscribe(
      (response:any) => {
        console.log("Flight Details Added:",response);
      },
      (error:any)=>{
        console.log("Cannot Add flight details",error);
      }
      );
    }
  }
}
