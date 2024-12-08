import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {
  private apiUrl = 'http://localhost:3000/encuestas'; // URL del backend

  constructor(private http: HttpClient) {}

  // Método para obtener todas las respuestas
  getEncuestas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
