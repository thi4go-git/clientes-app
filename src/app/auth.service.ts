import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt'


const API_URL_BASE = 'http://localhost:8080';
const API_URL_TOKEN = '/oauth/token';
const CLI_ID = 'my-angular-app';
const CLI_SECRET = '@321';


@Injectable({ providedIn: 'root' })
export class AuthService {


  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
  }


  obterTokenStorage() {
    const tokenStr = localStorage.getItem('access_token');
    if (tokenStr) {
      const token = JSON.parse(tokenStr).access_token;
      return token;
    }
    return null;
  }


  encerrarSessao() {
    localStorage.removeItem('access_token');
  }


  getUsuarioAutenticado() {
    const token = this.obterTokenStorage();
    if (token) {
      const usuario = this.jwtHelper.decodeToken(token).user_name
      return usuario;
    }
  }

  isAuthenticated(): boolean {
    const token = this.obterTokenStorage();
    if (token) {
      const expirado = this.jwtHelper.isTokenExpired(token);
      return !expirado;
    }
    return false;
  }


  obterToken(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa(CLI_ID + ':' + CLI_SECRET),
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    return this.http.post(API_URL_BASE + API_URL_TOKEN, params.toString(), { headers });
  }

}
