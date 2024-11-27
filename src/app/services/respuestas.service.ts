import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RespuestasService {
  private apiUrl = 'http://localhost:3000/api/respuestas'; // URL del backend

  constructor(private http: HttpClient) {}

  // Método para obtener todas las respuestas
  getRespuestas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
