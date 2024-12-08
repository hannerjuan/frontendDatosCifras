// import { Component, OnInit } from '@angular/core';
// import { EncuestasService } from '../../services/encuestas.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-encuestas',
//   templateUrl: './encuestas.component.html',
//   styleUrls: ['./encuestas.component.css']
// })
// export class EncuestasComponent implements OnInit {
//   encuestas: any[] = []; // Lista para almacenar las Encuestas

//   constructor(private encuestasService: EncuestasService) {}

//   ngOnInit(): void {
//     // // Cargar las Encuestas al iniciar el componente
//     // this.encuestasService.getEncuestas().subscribe(
//     //   (data) => {
//     //     this.encuestas = data;
//     //   },
//     //   (error) => {
//     //     console.error('Error al cargar Encuestas:', error);
//     //   }
//     // );
//   }
//   loadEncuestas() {
//     this.http.get<any[]>('http://localhost:3000/encuestas')
//       .subscribe((data) => {
//         this.encuestas = data;
//       }, (error) => {
//         console.error('Error al cargar encuestas:', error);
//       });
//   }
// }


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {
  encuestas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadEncuestas();
  }

  loadEncuestas() {
    this.http.get<any[]>('http://localhost:3000/encuestas')
      .subscribe((data) => {
        this.encuestas = data;
      }, (error) => {
        console.error('Error al cargar encuestas:', error);
      });
  }
}
