import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  authToken : string | null;
  authOwner : string | null;

  url = ""
  mostrarNgContainer: boolean = false;

  constructor(private router: Router) {
    this.authToken = localStorage.getItem("authToken");
    this.authOwner = localStorage.getItem("authOwner");

   }

  ngOnInit(): void {

    this.url = window.location.href
    console.log(this.url)
  }

  setTrue(truee: boolean){
    this.mostrarNgContainer= true
  }

  sair(){
    localStorage.removeItem('authOwner');
    localStorage.removeItem('authToken');
  }

  back(){
    window.history.back()
  }

}
