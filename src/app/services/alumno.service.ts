import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private http: HttpClient;
  private baseEndpoint = 'http://localhost:8090/api/alumnos)';
  constructor(http: HttpClient) {
    this.http = http;
  }
}
