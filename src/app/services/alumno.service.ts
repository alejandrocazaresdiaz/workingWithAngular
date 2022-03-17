import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
//import { map} from
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService { /*
  private http: HttpClient;
  private cabeceras : HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  private baseEndpoint = 'http://localhost:8090/api/alumnos)';
  //private baseEndpoint = 'http://localhost:8083/api/users)';
  constructor(http: HttpClient) {
    this.http = http;
    }

  public listar(): Observable<Alumno[]>{
    return this.http.get(this.baseEndpoint);
  }

  public listarPaginado(page: string, size: string): Observable<any>{
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<any>('${this.baseEndpoint}/pagina', {params: params});
  }

  public ver(id: number){
    return this.http.get<Alumno[]>('${this.baseEndpoint}/${id}');
  }
  public crear(alumno: Alumno){
    return this.http.post<Alumno[]>(this.baseEndpoint, alumno, {headers: this.cabeceras});
  }
  public editar(alumno: Alumno){
    return this.http.put<Alumno[]>('${this.baseEndpoint}/${alumno.id}',alumno, {headers: this.cabeceras});
  }
  public eliminar(id: number){
    return this.http.delete<void>('${this.baseEndpoint}/${id}');
  }*/
}
