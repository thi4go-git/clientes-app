import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {

  username: string;
  password: string;
  loginError: boolean;

  erros: string[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {
    this.authService
      .obterToken(this.username, this.password)
      .subscribe(response => {
        const access_token = JSON.stringify(response);
        localStorage.setItem('access_token', access_token);
        this.router.navigate(['/home'])
      }, errorResponse => {
        this.loginError = true;
      }
      )
  }

  novoUsuario(event) {
    event.preventDefault();
    console.log("NOVO");
  }
}
