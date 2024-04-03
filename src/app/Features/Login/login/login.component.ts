import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Service/login.service';
import {Login } from '../../Models/Login-Request.model';
import { Router } from '@angular/router';
import { NavbarComponent } from 'src/app/Core/Components/navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  model: Login;

  constructor(private loginservice:LoginService){
    this.model={
      email:'',
      password:''
    };
  }

  onSubmit():void {

    this.loginservice.login(this.model)
    .subscribe({
      next:(response)=>{
        console.log(response);
      }
    });
  }
}
/*export class LoginComponent implements OnInit {

  email:any;
  password:any;

  constructor(
    private loginservice: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  LoginForm!: FormGroup;


  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit(): void {
    if (this.LoginForm.valid) {
      const loginData = this.LoginForm.value; // Extracting form values
    //  this.loginservice.addLogin(loginData).subscribe(
    //    (response: any) => {
  //         console.log("Successfully Logined:", response);
  //         this.loginservice.updateLoginStatus(true);
            this.loginservice.login(this.email, this.password).subscribe(
            (next: any) =>{ console.log(next)
            this.loginservice.updateLoginStatus(true);
            this.router.navigate(['./']);
           })
  //         // Redirect to home page after successful login
           //this.router.navigate(['./']);

  //       },
  //       (error: any) => {
  //         console.log("Invalid Credentials:", error);
  //         // Handle error if needed (e.g., display error message to user)
  //       }
  //     );
  //   }
   }
  //onSubmit(){
    //this.loginservice.login(this.email, this.password).subscribe({
     // next: user => console.log(user)
    //})
  }
}*/
