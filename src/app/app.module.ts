import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Core/Components/navbar/navbar.component';
import { FlightListComponent } from './Features/flight-list/flight-list.component';
import { AddFlightComponent } from './Features/add-flight/add-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './Features/SignUp/signup/signup.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Features/Login/login/login.component';
import { EditflightComponent } from './Features/edit-flight/editflight/editflight.component';
import { SearchComponent } from './Features/Search-Flight/search/search.component';
import { UpdateuserComponent } from './Features/User_update/updateuser/updateuser.component';
import { BookflightComponent } from './Features/Book-flight/bookflight/bookflight.component';
import { PassengerDetailsComponent } from './Features/Passengerdetails/passenger-details/passenger-details.component';
import { TestComponent } from './Features/testfolder/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FlightListComponent,
    AddFlightComponent,
    SignupComponent,
    LoginComponent,
    EditflightComponent,
    SearchComponent,
    UpdateuserComponent,
    BookflightComponent,
    PassengerDetailsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
