import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respuestas', // Nombre del selector del componente
  templateUrl: './respuestas.component.html', // Ruta de la plantilla HTML
  styleUrls: ['./respuestas.component.css'] // Ruta de los estilos CSS
})
export class RespuestasComponent implements OnInit {
  respuestas: any[] = []; // Lista de respuestas

  constructor() {}

  ngOnInit(): void {
    // Aquí se puede cargar lógica inicial del componente
  }
}
