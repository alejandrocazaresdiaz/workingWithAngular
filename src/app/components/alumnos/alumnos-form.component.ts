import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.css']
})
export class AlumnosFormComponent implements OnInit {

  titulo = "Crear usuario";
  user : User = new User();

  constructor(  private service : UserService,
                private router: Router,
                private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id : number = +params.get('id');
      console.log("ID:"+id)
      if(id){
      console.log(this.service.ver(id));
        this.service.ver(id).subscribe(user => this.user = user)
        console.log(this.user)
      }
    });
  }

  public crear(): void{
    this.service.crear(this.user).subscribe(user => {
        console.log(user);
        alert('Usuario ${user.name} creado con éxito');
        this.router.navigate(['/alumnos']);
    });
  }

  public ver(): void {
      //this.user = this.service.ver(0);
  }
}
