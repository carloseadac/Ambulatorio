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
import { end, start } from '@popperjs/core';

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

  events$!: Observable<CalendarEvent<{calendar : CalendarEventDto}>[]>

  refresh = new Subject<void>();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: { ...colors['blue'] },
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: { ...colors['blue'] },
      actions: this.actions,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: { ...colors['blue'] },
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: { ...colors['blue'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];

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

  // fetchEvents(){
  //   this.events$ = this.agendasUser.map(events : CalendarEventDto) => {
  //     this.events = this.events;
  //     return{
  //       id: this.events.Id,
  //       title: this.events.Title,
  //       start: new Date(this.events.Start),
  //       end: new Date(this.events.End),
  //       color: {...colors['blue']},
  //       meta:{
  //         this.events,
  //       },
  //       cssClass:'text-color'
  //     }
  //   }

  // }

  async initialize() {
    this.todos();
  }

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
          console.log(instance.shiftInfo);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  pegaId(id : number){
    this.idPegado = id;
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
}
