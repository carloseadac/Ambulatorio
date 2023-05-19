import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Shift } from '../shift';
import { User } from '../user';
import { Medico } from '../medico';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  shift : Shift;
  startDate = '';
  endDate = '';
  startTime = '';
  endTime = '';
  medico : Medico;
  userId : number;

  domingo = false;
  segunda = false;
  terca = false;
  quarta = false;
  quinta = false;
  sexta = false;
  sabado = false;

  constructor() { 
    this.userId = 0;

  }

  ngOnInit(): void {

    let token = localStorage.getItem('authMedico');

    let self = this;
    var config2 = {
      method: 'get',
      url: 'http://localhost:5051/Shift/getAll',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
      
    };

    axios(config2)
    .then(function (response:any) {
      self.shift = response.data;
      self.startDate = self.shift.startTime.toString().split('T')[0]
      self.endDate = self.shift.endTime.toString().split('T')[0]
      self.startTime = `${self.shift.startTime.toString().split('T')[1].split(':')[0]}:${self.shift.startTime.toString().split('T')[1].split(':')[1]}`
      self.endTime = `${self.shift.endTime.toString().split('T')[1].split(':')[0]}:${self.shift.endTime.toString().split('T')[1].split(':')[1]}`
      self.endTime = self.shift.endTime.toString().split('T')[1]
      self.domingo = self.shift.sunday

      let st = (document.getElementById("start") as HTMLInputElement).value = self.startDate
      let end = (document.getElementById("end") as HTMLInputElement).value = self.endDate
      let stt= (document.getElementById("timestart") as HTMLInputElement).value = self.startTime
      let endt= (document.getElementById("timeend") as HTMLInputElement).value = self.endTime

      let domingo = (document.getElementById("domingo") as HTMLInputElement).checked = self.shift.sunday
      let segunda = (document.getElementById("segunda") as HTMLInputElement).checked = self.shift.monday
      let terca = (document.getElementById("terca") as HTMLInputElement).checked = self.shift.tuesday
      let quarta = (document.getElementById("quarta") as HTMLInputElement).checked = self.shift.wednesday
      let quinta = (document.getElementById("quinta") as HTMLInputElement).checked = self.shift.thursday
      let sexta = (document.getElementById("sexta") as HTMLInputElement).checked = self.shift.friday
      let sabado = (document.getElementById("sabado") as HTMLInputElement).checked = self.shift.saturday

    })
    .catch(function (error:any) {
      console.log(error);
    });

    var config = {
      method: 'get',
      url: 'http://localhost:5051/Medico/getById',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    };

    axios(config)
    .then(function (response:any) {
      self.medico = response.data;
      self.medico.dataNasc = new Date(self.medico.dataNasc).toLocaleDateString()

    })
    .catch(function (error:any) {
      console.log(error);
    });
  }

  saveShift(){
    let dataEntrada = document.getElementById("start") as HTMLInputElement;
    let dataSaida =document.getElementById("end") as HTMLInputElement;
    let horaEntrada= document.getElementById("timestart") as HTMLInputElement;
    let horaSaida= document.getElementById("timeend") as HTMLInputElement;
    let domingo  = (document.getElementById("domingo") as HTMLInputElement).checked;
    let segunda  = (document.getElementById("segunda") as HTMLInputElement).checked;
    let terca  = (document.getElementById("terca") as HTMLInputElement).checked;
    let quarta  = (document.getElementById("quarta") as HTMLInputElement).checked;
    let quinta  = (document.getElementById("quinta") as HTMLInputElement).checked;
    let sexta  = (document.getElementById("sexta") as HTMLInputElement).checked;
    let sabado  = (document.getElementById("sabado") as HTMLInputElement).checked;

    var data = JSON.stringify({
      "StartTime": dataEntrada?.value + "T" + horaEntrada.value+":00",
      "EndTime": dataSaida?.value + "T" + horaSaida.value+":00",
      "MedicoId":this.medico.id,
      "Sunday": domingo,
      "Monday": segunda,
      "Tuesday": terca,
      "Wednesday": quarta,
      "Thursday": quinta,
      "Friday": sexta,
      "Saturday": sabado,
    })

    if(this.medico.id){
      var config = {
        method: 'put',
        url: 'http://localhost:5051/Shift/update',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('authMedico')
        },
        data : data
      };
  
      axios(config)
      .then(function (response:any) {
        alert("Agenda atualizada!")
      })
      .catch(function (error:any) {
        console.log(error);
      });
    }
    
    

  }
}
