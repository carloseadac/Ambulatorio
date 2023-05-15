import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Shift } from '../shift';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  medico! : User
  shift : Shift;
  startDate = ''

  constructor() { 
    this.shift = {
      Id : 1,
      startDate: '',
      endDate: '',
      Monday: true,
      Tuesday: true,
      Wednesday: true,
      Thursday: true,
      Friday: true,
      Saturday: true,
      Sunday: true
    }
  }

  ngOnInit(): void {

    let token = localStorage.getItem('authMedico');

    var data = JSON.stringify({
      
    });
    console.log(token)
    let self = this;
    var config2 = {
      method: 'get',
      url: 'http://localhost:5051/Shift/getAll',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      data : data
    };

    axios(config2)
    .then(function (response:any) {
      self.shift = response.data;
      // console.log(responseData) // Armazene a resposta em uma variável
      // self.shift.Id = responseData[0].id;
      // self.shift.startDate = responseData[0].startDate;
      // self.shift.endDate = responseData[0].endDate;
      // self.shift.Monday = responseData[0].monday;
      // self.shift.Tuesday = responseData[0].tuesday;
      // self.shift.Wednesday = responseData[0].wednesday;
      // self.shift.Thursday = responseData[0].thursday;
      // self.shift.Friday = responseData[0].friday;
      // self.shift.Saturday = responseData[0].saturday;
      // self.shift.Sunday = responseData[0].sunday;
      console.log(typeof(self.shift.startDate))
      self.startDate = self.shift.startDate
      console.log(self.startDate)
      console.log(self.shift)
    })
    .catch(function (error:any) {
      console.log(error);
    });
  }

}
