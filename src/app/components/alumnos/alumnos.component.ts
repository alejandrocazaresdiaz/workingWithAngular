import { Component, OnInit } from '@angular/core';
//import { AlumnoService } from 'src/app/services/alumno.service';
//import { Alumno } from 'src/app/models/alumno';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  titulo= 'Listado de Usuarios';
  //alumnos: Alumno[];
  users: User[];
  //constructor(private service: AlumnoService) { }
  constructor(private service: UserService){}

  ngOnInit(): void {
    //this.service.listar().subscribe(alumnos => this.alumnos = alumnos );
    this.service.listar().subscribe(users => this.users = users );
  }

}
