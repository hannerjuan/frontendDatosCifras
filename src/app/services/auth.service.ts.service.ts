// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:3000/login'; // URL del backend

//   constructor(private http: HttpClient) {}

//   login(credentials: { fldusuario_login: string; fldusuario_password: string }): Observable<any> {
//     return this.http.post(`${this.apiUrl}`, credentials);
//   }

//    // Verifica si el token es válido y no ha expirado
//    isTokenExpired(): boolean {
//     const token = localStorage.getItem('token');
//     if (!token) return true;

//     const decodedToken:any = jwt_decode(token);
//     const currentTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos

//     return decodedToken.exp < currentTime; // Devuelve true si el token ha expirado
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { login: string; password: string }) {
    return this.http.post(`${this.apiURL}/login`, credentials);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
  if (!token) return true;

  try {
    const decodedToken: any = jwt_decode(token);
    const currentTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos
    return decodedToken.exp < currentTime; // El token ha expirado si la fecha actual es mayor que `exp`
  } catch (error) {
    return true; // Si no se puede decodificar el token, se considera expirado
  }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
