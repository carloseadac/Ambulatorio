import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(private router: Router) {
    let self = this;
   }

  ngOnInit(): void {
  }
  ocorrenciahistorico(){
    let self = this
    self.router.navigate(['historico']);
  }
  agenda(){
    let self = this
    self.router.navigate(['agendalist']);
  }
  consultas(){
    let self = this
    self.router.navigate(['consultaslist']);
  }
  perfil(){
    let self = this
    self.router.navigate(['profile']);
  }
}
