import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'datosCifras'
  isLoggedIn: boolean = false;

  constructor() {
    // Aquí podrías usar un servicio de autenticación para verificar si el usuario está logueado
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token; // Cambia según tu lógica de autenticación
  }
}
