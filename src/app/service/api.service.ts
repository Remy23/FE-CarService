import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //private urlApi = 'http://localhost:8080/car-service/new';
  //private urlGetAdviser = 'http://localhost:8080/car-service/get-adviser';
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Función para enviar los datos del formulario
  enviarRegistro(datos: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/car-service/new`, datos);
  }

  obtenerAsesores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/car-service/get-adviser`);
  }

  getRecentAppointment(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/car-service/get-recent-appointments`);
  }
}