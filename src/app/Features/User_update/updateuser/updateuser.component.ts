import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserDetails } from '../../Models/SignUp-Request.model';
import { SignupService } from 'src/app/Service/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit, OnDestroy {
  email: string | null = null;
  userData: any;
  updateForm: FormGroup;
  userInfoSubscription?: Subscription;
  updateSubscription?: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private userService: SignupService // Inject your user service
  ) {
    this.updateForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      Age: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      Role: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.userInfoSubscription = this.userService.getUserInfo().subscribe(userInfo => {
      this.userData = userInfo; // Store user data
      this.populateForm(userInfo);
    });
  }

  populateForm(userInfo: any): void {
    this.updateForm.patchValue({
      email: userInfo.email, // Update email field
      Age: userInfo.age,
      Password: userInfo.password,
      Role: userInfo.role
    });
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      const updatedUserData = {
        ...this.userData,
        email: this.updateForm.value.email, // Update email field
        age: this.updateForm.value.Age,
        password: this.updateForm.value.Password,
        role: this.updateForm.value.Role
      };

      this.updateSubscription = this.userService.updateUserData(updatedUserData).subscribe(response => {
        console.log('User data updated:', response);
        // Handle response if needed
      });
    }
  }

  ngOnDestroy(): void {
    this.userInfoSubscription?.unsubscribe();
    this.updateSubscription?.unsubscribe();
  }
}
