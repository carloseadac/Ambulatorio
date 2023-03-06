import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cont : number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('authToken') != null){
      this.router.navigate(['Ocorrencias']);
    }
  }

  aviso(){
    alert("Converse com seu gestor!")
  }

  login(){
    let login = document.getElementById("login") as HTMLInputElement;
    let senha = document.getElementById("password") as HTMLInputElement;

    var data = JSON.stringify({
      "edv": login?.value,
      "senha": senha?.value,
      "area" : "",
      "email" : "",
      "dataNasc" : Date,
      "nome" : ""
    });
    let self = this;
    var config = {
      method: 'post',
      url: 'http://localhost:5051/user/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response:any) {
      localStorage.setItem('authToken',response.data);
      localStorage.removeItem('authOwner');
      self.router.navigate(['Ocorrencias']);
    })
    .catch(function (error:any) {
      console.log(error);
      self.cont++;
    });

    var config2 = {
      method: 'post',
      url: 'http://localhost:5051/adm/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config2)
    .then(function (response:any) {
      localStorage.setItem('authOwner',response.data);
      localStorage.removeItem('authToken');
      self.router.navigate(['ocorrenciaslist']);
    })
    .catch(function (error:any) {
      console.log(error);
      self.cont++;
      console.log(self.cont);
      if(self.cont == 2){
        alert("Usuário ou senha incorretos!")
        self.cont = 0;
      }
    });

  }

}
