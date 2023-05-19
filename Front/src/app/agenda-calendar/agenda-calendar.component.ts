import { Component, OnDestroy, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
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
import { AgendaToday } from '../agendaToday';

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
  styleUrls: ['./agenda-calendar.component.css', '../build/calendar.classic-light.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgendaCalendarComponent implements OnInit, AfterViewInit {

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
  events: CalendarEventDto[] = [];
  events$: Observable<CalendarEvent<{ calendar: CalendarEventDto; }>[]> | undefined

  eventsToday: AgendaToday[];
  startDates: Date[]

  refresh = new Subject<void>();

  calendar = new Calendar({
    features: {
      eventEdit: {
        readOnly: false
      },

    },
    width: '100%', // = 800px
    height: '100%'
  });
  tbarConfig = {
    items: [
      {
        type: 'button',
        text: 'My button'
      }
    ]
  }
  activeDayIsOpen: boolean = true;
  mostrarNgContainer: boolean = false;
  constructor(private modal: NgbModal,
    private router: Router) {
    this.adm = {
      id: 0,
      nome: "",
      edv: "",
      senha: "",
      area: "",
      email: "",
      dataNasc: ""
    }
    this.medico = {
      id: 0,
      nome: "",
      edv: "",
      senha: "",
      area: "",
      email: "",
      dataNasc: ""
    }

    var config = {
      method: 'get',
      url: 'http://localhost:5051/Agenda/getAllDay/',
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('authMedico') },
      data: '',
    };
    var instance = this;
    axios(config)
      .then(response => {
        this.agendasUser = response.data; // Assumindo que a resposta contém os dados da agenda do usuário

        this.eventos.pop()
        for (let k = 0; k < instance.agendasUser.length; k++) {
          var i: { id: number, name: string, startDate: string, endDate: string, resourceId: number } = {
            id: 0,
            name: '',
            startDate: '',
            endDate: '',
            resourceId: 1
          };
          i.id = this.agendasUser[k].id;
          i.name = `${this.upperSobe(this.agendasUser[k].descricao)} ` + this.agendasUser[k].user.nome;
          i.startDate = this.agendasUser[k].startDate.toString();
          i.endDate = this.agendasUser[k].endDate.toString();

          this.eventos.push(i);
        }


      })
      .catch(function (error) {
        instance.events = error
      });
  }

  alertNatela($event: Event) {
    alert($event)
  }


  agendasUser: AgendaUser[] = [];
  dadoscorrencias: Array<Ocorrencias> = [];

  id: number = -1
  idPegado: number = 0;
  caminho: string | null = "";
  adm: User
  medico: User
  idmedico: number = 0;

  mostrarCalendario = false

  ngOnInit(): void {
    var config3 = {
      method: 'get',
      url: 'http://localhost:5051/Agenda/getToday',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('authMedico')
      },
    };
    axios(config3)
      .then(function (response: any) {
        self2.eventsToday = response.data;
        console.log(self2.eventsToday)
        console.log(self2.startDates)

      })
      .catch(function (error: any) {
        console.log(error);
      });

    let self = this;
    if (localStorage.getItem("authOwner") == null && localStorage.getItem("authToken") == null && localStorage.getItem("authMedico") == null) {
      self.router.navigate(["/"])
    }
    if (localStorage.getItem("authToken") != null) {
      self.router.navigate(["/"])
    }
    if (localStorage.getItem("authMedico") == null && localStorage.getItem("authToken") == null && localStorage.getItem("authOwner") == null) {
      self.router.navigate(["/"])
    }

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
      data: data3
    };
    axios(config4)
      .then(function (response: any) {
        self2.medico = response.data;
        self2.idmedico = self2.medico.id;
      })
      .catch(function (error: any) {
        console.log(error);
      });

    this.initialize();
  }

  showCalendar() {
    this.mostrarCalendario = true
  }
  ngAfterViewInit(): void {
    this.showCalendar()
  }

  setTrue(truee: boolean) {
    this.mostrarNgContainer ? this.mostrarNgContainer = false : this.mostrarNgContainer = true
    console.log(this.mostrarNgContainer)
  }

  async initialize() {
  }

  pegaId(id: number) {
    this.idPegado = id;
  }


  approve() {
    var instance = this
    var config = {
      method: 'put',
      url: 'http://localhost:5051/Agenda/Approve/' + instance.idPegado,
      headers: {
        'Content-Type': 'application/json'
      },
      data: ''
    };

    axios(config).then(function (response) {
      console.log(response.status)
    })
  }

  reset() {
    this.initialize();
  }
  resources = [
    {
      id: 1,
      name: 'Default Calendar',
      eventColor: 'blue'
    }
  ];

  eventos = [
    {
      id: 1,
      name: '',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      resourceId: 1
    }
  ];
  agenda: CalendarEventDto = this.eventos[0];

  calendarConfig = calendarConfig;
  projectConfig = projectConfig;

  @ViewChild('calendar') calendarComponent!: BryntumCalendarComponent;
  @ViewChild('project') projectComponent!: BryntumProjectModelComponent;

  upperSobe(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1)
  }
}
