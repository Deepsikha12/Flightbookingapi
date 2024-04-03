import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../Models/SignUp-Request.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/app/Service/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private signupservice:SignupService,private formBuilder:FormBuilder,private router: Router){}
  SignUpForm!:FormGroup;
  userdetails = new UserDetails();

  ngOnInit(): void {
    this.SignUpForm = this.formBuilder.group({
      Email:['',[Validators.required,Validators.email]],
      Age:['',[Validators.required]],
      Password:['',[Validators.required]],
      Role:['',[Validators.required]],
    });
  }
onSubmit():void{
  if(this.SignUpForm.valid)
  {
    this.userdetails=this.SignUpForm.value;

    this.signupservice.addSignup(this.userdetails).subscribe(
      (response:any) => {
        console.log("Successfully Signed up:",response);
        this.router.navigate(['./']);
      },
      (error:any)=>{
        console.log("Cannot Register your account:",error);
      }
      );
    }
  }
  }
  //var s!:UserDetails;
//}
//}
