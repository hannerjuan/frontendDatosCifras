import { Component, OnInit } from '@angular/core';
import { RespuestasService } from '../../services/respuestas.service';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {
  respuestas: any[] = []; // Lista para almacenar las respuestas

  constructor(private respuestasService: RespuestasService) {}

  ngOnInit(): void {
    // Cargar las respuestas al iniciar el componente
    this.respuestasService.getRespuestas().subscribe(
      (data) => {
        this.respuestas = data;
      },
      (error) => {
        console.error('Error al cargar respuestas:', error);
      }
    );
  }
}
