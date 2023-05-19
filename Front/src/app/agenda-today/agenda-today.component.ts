import { Component, Input, OnInit } from '@angular/core';
import { AgendaToday } from '../agendaToday';

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

}
