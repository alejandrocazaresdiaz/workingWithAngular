import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http: HttpClient;
  private cabeceras : HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  private baseEndpoint = 'http://localhost:8083/api';
  constructor(http: HttpClient) {
    this.http = http;
    }

  //public listar(): Observable<User[]>{
  public listar(): Observable<any>{
    return this.http.get(this.baseEndpoint+'/users');
  }

  public listarPaginado(page: string, size: string): Observable<any>{
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<any>(this.baseEndpoint+'/pagina',  {params: params});
  }

  public ver(id: number) : Observable<any>{
    return this.http.get<User[]>(this.baseEndpoint+'/user/'+id);
  }
  public crear(user: User){
  console.log(user.date);
  console.log(new Date().toDateString());
  console.log(new Date().toISOString());
    if(!user.date){
      user.date = new Date().toISOString();
    }
    return this.http.post(this.baseEndpoint+'/user', user, {headers: this.cabeceras});
  }
  public editar(user: User){
    return this.http.put<User[]>(this.baseEndpoint+'/user/${user.id}',user, {headers: this.cabeceras});
  }
  public eliminar(id: number){
    return this.http.delete<void>(this.baseEndpoint+'/user/${id}');
  }
}
