import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AlumnosComponent} from './components/alumnos/alumnos.component';
import {CursosComponent} from './components/cursos/cursos.component';

const routes: Routes = [
  {path:'alumnos', component: AlumnosComponent},
  {path:'cursos', component: CursosComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
