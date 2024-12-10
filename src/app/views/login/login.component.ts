// import { Component } from '@angular/core';
// import { AuthService } from '../../services/auth.service.ts.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   credentials = {
//     fldusuario_login: '',
//     fldusuario_password: ''
//   };

//   constructor(private authService: AuthService, private router: Router) {}

//   login() {
//     this.authService.login(this.credentials).subscribe({
//       next: (response) => {
//         localStorage.setItem('token', response.token); // Guarda el token en el localStorage
//         this.router.navigate(['/home']); // Redirige al usuario después del login
//       },
//       error: (error) => {
//         console.error('Error al iniciar sesión:', error);
//         alert('Credenciales incorrectas');
//       }
//     });
//   }
// }

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service.ts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = {
    login: '',
    password: '',
  };

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log('Datos enviados:', this.credentials); // Verifica los datos
    this.authService.login(this.credentials).subscribe(
      (response: any) => {

        console.log('Respuesta de la API:', response);

        if (response.token) {
          this.authService.saveToken(response.token);

          this.router.navigate(['/']).then((navigated) => {
            console.log('¿Navegación exitosa?', navigated);
          }).catch((error) => {
            console.error('Error en la navegación:', error);
          });
          
        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos';
        }
      },
      (error) => {
        this.errorMessage = 'Error al iniciar sesión';
        console.error(error);
      }
    );
  }
}

