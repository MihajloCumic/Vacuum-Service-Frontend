import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { JwtData } from '../models/JwtModel';
import { jwtDecode } from 'jwt-decode';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  public email: string = '';
  public password: string = '';

  constructor(private loginService: LoginService, private router: Router){}

  login():void{
    this.loginService.login(this.email, this.password).subscribe(
      (res) => {
        const jwtData: JwtData = jwtDecode(res.jwt);
        localStorage.clear();
        localStorage.setItem('jwt', res.jwt);
        localStorage.setItem('email', jwtData.sub);
        localStorage.setItem('authorization', JSON.stringify(jwtData.authorization));
        this.router.navigate(['/vacuum-page']);
      },
      (err) => alert('Bad credentials.')
    );
  }
}
