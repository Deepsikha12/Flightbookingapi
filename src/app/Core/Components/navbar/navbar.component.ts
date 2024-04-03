import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  user: any;

  constructor(public loginService: LoginService) {}

  /*ngOnInit(): void {
    // Subscribe to login status changes
    this.loginService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });

    this.loginService.currentUser$.subscribe(user => {
      this.user = user;
      this.isLoggedIn = !!user;
  });
}*/
}
