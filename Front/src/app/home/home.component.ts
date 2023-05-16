import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import axios from 'axios';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user : User
  userId : number;

  constructor(private router: Router) {
    let self = this;
    this.userId = 0;

    this.user = {
      id : this.userId,
      nome : "",
      edv: "",
      senha: "",
      area: "",
      email: "",
      dataNasc: ""
    }
   }

  ngOnInit(): void {
      let token = localStorage.getItem('authToken');

      var data = JSON.stringify({
        
      });
      console.log(token)
      let self = this;
      var config2 = {
        method: 'get',
        url: 'http://localhost:5051/user/getById',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        data : data
      };

      axios(config2)
      .then(function (response:any) {
        console.log(JSON.stringify(response.data));
        self.userId = response.data;
        self.user = response.data
      })
      .catch(function (error:any) {
        console.log(error);
      });
  }
  ocorrencia(){
    let self = this
    self.router.navigate(['Ocorrencias']);
  }
  ocorrenciahistorico(){
    let self = this
    self.router.navigate(['historico']);
  }
  agenda(){
    let self = this
    self.router.navigate(['agendalist']);
  }
}
