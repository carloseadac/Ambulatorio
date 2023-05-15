import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { OcorrenciasUser } from '../ocorrenciasUser';
import { Ocorrencias } from '../ocorrencias';
import axios from 'axios';
import { Route, Router } from '@angular/router';
import { DatePipe, Time } from '@angular/common';
import { User } from '../user';
import { AgendaUser } from '../agendaUser';

import { BryntumCalendarComponent, BryntumProjectModelComponent } from '@bryntum/calendar-angular';
import { calendarConfig, projectConfig } from '../app.config';

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
import { Observable, Subject, map } from 'rxjs';
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
import { end, start } from '@popperjs/core';
import { Calendar } from '@bryntum/calendar';

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
  styleUrls : ['./agenda-calendar.component.css','../build/calendar.classic-light.css'],
  encapsulation : ViewEncapsulation.None
})
export class AgendaCalendarComponent implements OnInit{

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any> | undefined;

  view: CalendarView = CalendarView.Week;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  shiftInfo!: shiftsDto;

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
  events: CalendarEventDto[]=[];
  events$: Observable<CalendarEvent<{ calendar: CalendarEventDto; }>[]> | undefined

  refresh = new Subject<void>();

  // events: CalendarEvent[] = [
  //   {
  //     start: subDays(startOfDay(new Date()), 1),
  //     end: addDays(new Date(), 1),
  //     title: 'A 3 day event',
  //     color: { ...colors['blue'] },
  //     actions: this.actions,
  //     allDay: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true,
  //     },
  //     draggable: true,
  //   },
  //   {
  //     start: startOfDay(new Date()),
  //     title: 'An event with no end date',
  //     color: { ...colors['blue'] },
  //     actions: this.actions,
  //   },
  //   {
  //     start: subDays(endOfMonth(new Date()), 3),
  //     end: addDays(endOfMonth(new Date()), 3),
  //     title: 'A long event that spans 2 months',
  //     color: { ...colors['blue'] },
  //     allDay: true,
  //   },
  //   {
  //     start: addHours(startOfDay(new Date()), 2),
  //     end: addHours(new Date(), 2),
  //     title: 'A draggable and resizable event',
  //     color: { ...colors['blue'] },
  //     actions: this.actions,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true,
  //     },
  //     draggable: true,
  //   },
  // ];

   calendar = new Calendar({
    features:{
      eventEdit : {
        readOnly : false
    },
    
    },
    width  :'100%', // = 800px
    height : '100%'
  });
  tbarConfig = {
    items : [
        {
            type : 'button',
            text : 'My button'
        }
    ]
}
  activeDayIsOpen: boolean = true;
  mostrarNgContainer: boolean = false;
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

      var config = {
        method: 'get',
        url: 'http://localhost:5051/Agenda/getAllDay/',
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('authMedico')},
        data: '',
      };
      var instance = this;
      axios(config)
      .then(response => {
        this.agendasUser = response.data; // Assumindo que a resposta contém os dados da agenda do usuário
        console.log(this.agendasUser)
        // this.agendasUser.forEach((item: AgendaUser) => {
        //   console.log()
        //   var i = new CalendarEventDto();
        //   i.id = item.id;
        //   console.log(i)
        //   i.name = "consulta";
        //   console.log(i)
        //   i.startDate = item.startDate.toString();
        //   console.log(i)
        //   i.endDate = item.endDate.toString();
        //   console.log(i)
        //   instance.events.push(i);
        // });
  
        console.log(instance.events);
  
        // let events = [];
  
        for (let k = 0; k < instance.agendasUser.length; k++) {
          console.log(k)
          var i : {id:number,name:string, startDate: string, endDate: string, resourceId:number}={
            id: 0,
            name:'',
            startDate:'',
            endDate:'',
            resourceId:1
          };
          i.id = this.agendasUser[k].id;
          i.name = "Consulta "+this.agendasUser[k].user.nome;
          i.startDate = this.agendasUser[k].startDate.toString();
          i.endDate = this.agendasUser[k].endDate.toString();
  
          this.eventos.push(i);
        }

  
      })
          .catch(function (error) {
            instance.events = error
          });
      this.todos();
    }

    alertNatela($event: Event){
      alert($event)
    }


  agendasUser: AgendaUser[]=[];
  dadoscorrencias: Array<Ocorrencias> = [];

  id : number = -1
  idPegado : number = 0;
  caminho : string | null = "";
  adm : User
  medico : User
  idmedico: number = 0;

  ngOnInit(): void {
    let self = this;
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
      self2.medico = response.data;
      self2.idmedico= self2.medico.id;
      console.log(self2.idmedico);
    })
    .catch(function (error:any) {
      console.log(error);
    });

    this.initialize();
    setTimeout(() => {
      this.setTrue(true)
    }, 2000);
  }

  setTrue(truee: boolean){
    this.mostrarNgContainer= true
  }

  async initialize() {
    this.todos();
  }

  todos(){
      var config1 = {
        method: 'get',
        url: 'http://localhost:5051/Shift/getAll/',
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('authMedico')},
        data: '',
      };
      var instance = this;
      axios(config1)
        .then(function (response) {
          instance.shiftInfo = response.data
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  pegaId(id : number){
    this.idPegado = id;
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

  beforeWeekViewRender(renderEvent: CalendarWeekViewBeforeRenderEvent) {
    if ( this.shiftInfo) {
      console.log("Entrou")
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let info = this.shiftInfo
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
  }
}
resources = [
  {
      id         : 1,
      name       : 'Default Calendar',
      eventColor : 'blue'
  }
];

eventos = [
  {
      id         : 1,
      name       : 'Meeting',
      startDate  : new Date().toISOString(),
      endDate    : new Date().toISOString(),
      resourceId : 1
  }
];
agenda : CalendarEventDto = this.eventos[0];

calendarConfig = calendarConfig;
projectConfig = projectConfig;

@ViewChild('calendar') calendarComponent!: BryntumCalendarComponent;
@ViewChild('project') projectComponent!: BryntumProjectModelComponent;
}
