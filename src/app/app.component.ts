import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from "./login-page/login-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgbNavModule, CommonModule, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router){}
  isLoggedIn(): boolean{
    const jwtToken = localStorage.getItem('jwt');
    return !!jwtToken;
  }

  logOut(): void{
    localStorage.clear();
    this.router.navigate(['/login']);
    alert('You have logged out.');

  }

  canAddVacuums(): boolean{
    return !!localStorage
      .getItem('authorization')
      ?.includes('can_add_vacuums');
  }

}
