import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false; // Propiedad para verificar si el usuario está logueado

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkLoginStatus(); // Comprueba el estado de login al inicializar el componente
  }

  checkLoginStatus(): void {
    // Si el token existe en localStorage, el usuario está logueado
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token'); // Elimina el token
    this.isLoggedIn = false; // Actualiza el estado de login
    this.router.navigate(['/login']); // Redirige al login
  }
}
