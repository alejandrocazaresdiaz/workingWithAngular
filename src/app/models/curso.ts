import {Alumno} from './alumno';

export class Curso {
  id: number;
  nombre: string;
  createAt: string;
  alumnos: Alumno[]=[];
}
