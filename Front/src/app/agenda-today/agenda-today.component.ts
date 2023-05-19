import { Component, Input, OnInit } from '@angular/core';
import { AgendaToday } from '../agendaToday';
import axios from 'axios';

@Component({
  selector: 'app-agenda-today',
  templateUrl: './agenda-today.component.html',
  styleUrls: ['./agenda-today.component.css']
})
export class AgendaTodayComponent implements OnInit {

  @Input() eventsToday : AgendaToday[];
  constructor() { }

  ngOnInit(): void {
  }

  delete(id:number){
    var config3 = {
      method: 'delete',
      url: 'http://localhost:5051/Agenda/Delete/'+id,
      headers: {
      },
    };
    axios(config3)
    .then(function (response:any) {
      alert("Consulta desmarcada");
      window.location.reload();
    })
    .catch(function (error:any) {
      console.log(error);
    });
  }

}
