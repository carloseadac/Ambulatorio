import { Component, OnDestroy, OnInit } from '@angular/core';
import { OcorrenciasUser } from '../ocorrenciasUser';
import { Ocorrencias } from '../ocorrencias';
import axios from 'axios';
import { Route, Router } from '@angular/router';
import { DatePipe, Time } from '@angular/common';
import { User } from '../user';
import { AgendaUser } from '../agendaUser';

import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Observable, Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  CalendarWeekViewBeforeRenderEvent,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { CalendarEventDto } from '../CalendarEventDto';
import { shiftsDto } from '../shiftDto';

const colors: Record<string, EventColor> = {
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  }
};

@Component({
  selector: 'app-agenda-calendar',
  templateUrl: './agenda-calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./agenda-calendar.component.css']
})
export class AgendaCalendarComponent implements OnInit{

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any> | undefined;

  view: CalendarView = CalendarView.Week;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  shiftInfo!: shiftsDto[];

  modalData: {
    action: string;
    event: CalendarEvent;
  } | undefined;

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        
      },
    },
  ];

  events$!: Observable<CalendarEvent<{calendar : CalendarEventDto}>[]>

  refresh = new Subject<void>();

  events!: CalendarEventDto;

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal,
    private router: Router) {
      this.adm = {
        id : 0,
        nome : "",
        edv: "",
        senha: "",
        area: "",
        email: "",
        dataNasc: ""
      }
      this.medico = {
        id : 0,
        nome : "",
        edv: "",
        senha: "",
        area: "",
        email: "",
        dataNasc: ""
      }

      this.todos();
    }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    // this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }



  agendasUser: Array<AgendaUser> = [];
  dadoscorrencias: Array<Ocorrencias> = [];

  id : number = -1
  idPegado : number = 0;
  caminho : string | null = "";
  adm : User
  medico : User

  idmedico: number = 0;

  ngOnInit(): void {
    // let self = this;
    // if(localStorage.getItem("authOwner") == null && localStorage.getItem("authToken") == null && localStorage.getItem("authMedico") == null ){
    //   self.router.navigate(["/"])
    // }
    // if(localStorage.getItem("authToken") != null){
    //   self.router.navigate(["/"])
    // }
    // if(localStorage.getItem("authMedico") == null && localStorage.getItem("authToken") == null && localStorage.getItem("authOwner") == null){
    //   self.router.navigate(["/"])
    // }

    var data3 = JSON.stringify({
      
    });

    let self2 = this;

    var config4 = {
      method: 'get',
      url: 'http://localhost:5051/medico/getById',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authMedico')
      },
      data : data3
    };
    axios(config4)
    .then(function (response:any) {
      console.log(JSON.stringify(response.data));
      self2.medico = response.data;
      self2.idmedico= self2.medico.id;
      console.log(self2.idmedico)

      let dataNova = self2.adm.dataNasc.substring(0,10).toString();
      let day = dataNova.substring(8,10).toString();
      let month = dataNova.substring(5,7).toString();
      let year = dataNova.substring(0,4).toString();
      let dataCerta = day + month + year;

    })
    .catch(function (error:any) {
      console.log(error);
    });

    this.initialize();

  }

  async initialize() {
    this.todos();
  }

  // dadosUser(descricoes : string, ocorrenciaId : number, data1 : Date, data2 : Date, horaE : string, horaS : string){
  //   const date = new Date();

  //   let descricao = document.body.querySelector('#description') as HTMLInputElement
  //   descricao.value = descricoes 

  //   let datastart = document.body.querySelector('#datastart') as HTMLInputElement
  //   datastart.valueAsDate = data1 != null ? new Date(data1) : date;
    
  //   let dataend = document.body.querySelector('#dataend') as HTMLInputElement
  //   dataend.valueAsDate = data2 != null ? new Date(data2) : date;

  //   var horaEntrada = horaE[11]+horaE[12] + ":" + horaE[14] + horaE[15];
  //   var horaSaida =horaS[11]+horaS[12] + ":" + horaS[14] + horaS[15];

  //   let horaEnt = document.body.querySelector('#horaE') as HTMLInputElement
  //   horaEnt.value = horaEntrada;

  //   let horaSai = document.body.querySelector('#horaS') as HTMLInputElement
  //   horaSai.value = horaSaida;

  //   this.id = ocorrenciaId
  // }


  todos(){
    var config = {
      method: 'get',
      url: 'http://localhost:5051/Agenda/getAllDay/',
      headers: {'Authorization': 'Bearer ' + localStorage.getItem('authMedico')},
      data: '',
    };

    var instance = this;
    axios(config)
      .then(function (response) {
        instance.events$ = response.data
        instance.events = response.data
        instance.agendasUser = response.data;
        console.log(instance.agendasUser);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  filtro(){
    let EDV = document.getElementById("EDV") as HTMLInputElement;
    var config ={
      method: 'get',
      url: 'http://localhost:5051/Ocorrencia/getEdv/'+EDV.value,
      headers: { },
      data : ''
    };
    var instance = this;
    axios(config).then(function (response) {
      instance.agendasUser = response.data;
    })
  }

  pegaId(id : number){
    this.idPegado = id;
  }

  editOcorrencia(){
    let descricao  = document.getElementById("description") as HTMLInputElement;
    let datastart  = document.getElementById("datastart") as HTMLInputElement;
    let dataend = document.getElementById("dataend") as HTMLInputElement;
    let select = document.getElementById("ocorrencias") as HTMLSelectElement;
    let horaE = document.getElementById("horaE") as HTMLInputElement;
    let horaS = document.getElementById("horaS") as HTMLInputElement;
    let option = select.options[select.selectedIndex];
    let dadosNome = option.text;

    var data = JSON.stringify({
      "id": 0,
      "descricao": descricao?.value,
      "dataEntrada": datastart?.value + "T" + horaE?.value +":00.000Z",
      "dataSaida": dataend?.value + "T" + horaS?.value +":00.000Z",
      "comprovante": "",
      "documento": "",
      "ocorrencias":{
        "id": option?.value,
        "nome": dadosNome,
      },
      "usuario": {
        "id": 0,
        "nome": "",
        "edv": "",
        "area": "",
        "dataNasc": dataend?.value + "T00:00:00.000Z",
        "email": "",
        "senha": ""
      }
    })

    var config ={
      method: 'put',
      url: 'http://localhost:5051/Ocorrencia/update/' + this.id,
      headers: { 'Content-Type': 'application/json' },
      data : data
    };
    let instance = this;
    axios(config).then(function (response) {
      instance.agendasUser = response.data;
      
      var startsDate = new Date(datastart.value);
      startsDate.setDate(startsDate.getDate() + 1)

      var endsDate = new Date(dataend.value);
      endsDate.setDate(endsDate.getDate() + 1)
      console.log("oi")

      // for(var c = 0; c < instance.ocorrencias.length; c++){
      //   if(instance.ocorrencias[c].id == instance.id){
      //     instance.ocorrencias[c].descricao = descricao.value
      //     instance.ocorrencias[c].ocorrencias.nome = dadosNome
      //     instance.ocorrencias[c].dataEntrada = startsDate
      //     instance.ocorrencias[c].dataSaida = endsDate
      //   }
      // };

      
      window.location.reload();

    })
  }
  
  delet(){
    var instance = this
    var config = {
      method: 'delete',
      url: 'http://localhost:5051/Ocorrencia/del/' + instance.idPegado,
      headers: {
        'Content-Type': 'application/json'
      },
      data : ''
    };

    axios(config).then(function (response) {
      instance.agendasUser.forEach(element => {
        if(element.id == instance.idPegado){
          var indice = instance.agendasUser?.indexOf(element)
          instance.agendasUser.splice(indice, 1)
        }
      });
    })
  }
  approve(){
    var instance = this
    var config = {
      method: 'put',
      url: 'http://localhost:5051/Agenda/Approve/' + instance.idPegado,
      headers: {
        'Content-Type': 'application/json'
      },
      data : ''
    };

    axios(config).then(function (response) {
      console.log(response.status)
    })
  }

  reset(){
    this.initialize();
  }

  beforeweekviewRender(renderEvent: CalendarWeekViewBeforeRenderEvent) {
    if ( this.shiftInfo.length !== 0) {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      this.shiftInfo.forEach(info => {
        const shiftstartDate = new Date(info.startDate);
        const shiftEndDate = info.EndDate ? new Date (info.EndDate!) : null;
        shiftstartDate.setHours(0, 0, 0, 0);
        shiftEndDate?.setHours(0, 0, 0, 0);

        renderEvent.hourColumns.forEach((hourColumn) => {
          const calendarColumnDate = new Date (hourColumn.date);
          const dayOfWeek = days[ calendarColumnDate.getDay() ];

            if(calendarColumnDate >= shiftstartDate &&
              (shiftEndDate === null || calendarColumnDate <= shiftEndDate) && 
              (dayOfWeek === "Sunday" && info.Sunday ||
              dayOfWeek === "Monday" && info.Monday ||
              dayOfWeek === "Tuesday" && info.Tuesday ||
              dayOfWeek === "Wednesday" && info.Wednesday ||
              dayOfWeek === "Thursday" && info.Thursday ||
              dayOfWeek === "Friday" && info.Friday ||
              dayOfWeek === "Saturday" && info.Saturday)){
                hourColumn.hours.forEach((hour) => {
                hour.segments.forEach((segment) => {
                segment.cssClass = 'bg-green';
                });
              })

            }
      });
    });
  }
}
}
