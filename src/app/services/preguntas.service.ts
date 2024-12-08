import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  preguntas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPreguntas();
  }

  loadPreguntas() {
    this.http.get<any[]>('http://localhost:3000/preguntas')
      .subscribe(
        (data) => {
          this.preguntas = data;
        },
        (error) => {
          console.error('Error al cargar preguntas:', error);
        }
      );
  }
}
