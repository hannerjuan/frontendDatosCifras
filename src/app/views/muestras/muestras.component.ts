import { Component, OnInit } from '@angular/core';
import { MuestrasService } from '../../services/muestras.service';

@Component({
  selector: 'app-muestras',
  templateUrl: './muestras.component.html',
  styleUrls: ['./muestras.component.css']
})
export class MuestrasComponent implements OnInit {
  muestras: any[] = []; // Lista para almacenar las respuestas

  constructor(private muestrasService: MuestrasService) {}

  ngOnInit(): void {
    // Cargar las respuestas al iniciar el componente
    this.muestrasService.getMuestras().subscribe(
      (data) => {
        this.muestras = data;
      },
      (error) => {
        console.error('Error al cargar respuestas:', error);
      }
    );
  }
}
