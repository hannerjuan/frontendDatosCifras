import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/muestras'; // URL base de tu API

  constructor(private http: HttpClient) {}

  // Ejemplo: Obtener todas las muestras
  getMuestras(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  // Ejemplo: Crear una nueva muestra
  createMuestra(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/muestra`, data);
  }

  // Ejemplo: Actualizar una muestra por ID
  updateMuestra(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/muestra/${id}`, data);
  }

  // Ejemplo: Eliminar una muestra por ID
  deleteMuestra(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/muestra/${id}`);
  }
}
