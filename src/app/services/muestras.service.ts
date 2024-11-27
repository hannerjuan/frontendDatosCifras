import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuestrasService {
  private apiUrl = 'http://localhost:3000/muestras'; // URL del backend

  constructor(private http: HttpClient) {}

  // Método para obtener todas las respuestas
  getMuestras(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
