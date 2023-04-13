import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    let self = this;
   }

  ngOnInit(): void {
  }
  ocorrencia(){
    let self = this
    self.router.navigate(['Ocorrencias']);
  }
  ocorrenciahistorico(){
    let self = this
    self.router.navigate(['historico']);
  }

}
