import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{FlightListComponent} from './Features/flight-list/flight-list.component';
import{AddFlightComponent} from './Features/add-flight/add-flight.component';
import{SignupComponent} from './Features/SignUp/signup/signup.component';
import { LoginComponent } from './Features/Login/login/login.component';
import { EditflightComponent } from './Features/edit-flight/editflight/editflight.component';
import { SearchComponent } from './Features/Search-Flight/search/search.component';
import { UpdateuserComponent } from './Features/User_update/updateuser/updateuser.component';
import { BookflightComponent } from './Features/Book-flight/bookflight/bookflight.component';
import { PassengerDetailsComponent } from './Features/Passengerdetails/passenger-details/passenger-details.component';
import { TestComponent } from './Features/testfolder/test/test.component';


const routes: Routes = [
  {
    path:'Get all Information',
    component:FlightListComponent
  },
  {
    path:'Get all Information/Add Flights',
    component:AddFlightComponent
  },
  {
    path:'Sign Up',
    component:SignupComponent
  },
  {
    path:"Login",
    component:LoginComponent
    },
  {
    path:'Get all Information/Edit/:id',
    component:EditflightComponent
  },
  {
    path:'Home/Search',
    component:SearchComponent
  },
  {
    path:'Update/:email',
    component:UpdateuserComponent
  },
  {
    path:'Home/Search/Book Ticket/:id',
    component:BookflightComponent
  },
  {
    path:'Home/Search/Book Ticket/:id/Add Passenger',
    component:PassengerDetailsComponent
  },
  {
    path:'Test',
    component:TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
