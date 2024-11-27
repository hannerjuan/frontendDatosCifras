import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-muestras',
  templateUrl: './muestras.component.html',
  styleUrls: ['./muestras.component.css'],
})
export class MuestrasComponent implements OnInit {
  muestras: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getMuestras();
  }

  getMuestras(): void {
    this.apiService.getMuestras().subscribe(
      (data) => {
        this.muestras = data;
        console.log('Muestras:', data);
      },
      (error) => {
        console.error('Error al obtener muestras:', error);
      }
    );
  }
}
