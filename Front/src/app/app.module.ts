import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { OcorrenciaComponent } from './ocorrencia/ocorrencia.component';
import { OcorrenciaHistoricoComponent } from './ocorrencia-historico/ocorrencia-historico.component';
import { OcorrenciaListComponent } from './ocorrencia-list/ocorrencia-list.component';
import { RouterModule } from '@angular/router';

import { DataTablesModule } from "angular-datatables";
import { PrimeiroAcessoComponent } from './primeiro-acesso/primeiro-acesso.component';
import { RegisterAdmComponent } from './register-adm/register-adm.component';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { HomeComponent } from './home/home.component';
import { AgendaCalendarComponent } from './agenda-calendar/agenda-calendar.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BryntumCalendarModule } from '@bryntum/calendar-angular';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule, MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    RegisterUserComponent,
    OcorrenciaComponent,
    OcorrenciaHistoricoComponent,
    OcorrenciaListComponent,
    PrimeiroAcessoComponent,
    RegisterAdmComponent,
    AgendaListComponent,
    HomeComponent,
    AgendaCalendarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'Ocorrencias', component: OcorrenciaComponent},
      {path: 'registerUsers', component: RegisterUserComponent},
      {path: 'ocorrenciaslist', component: OcorrenciaListComponent},
      {path: 'historico', component: OcorrenciaHistoricoComponent },
      {path: 'trocarSenha', component: PrimeiroAcessoComponent},
      {path: 'registerAdm', component: RegisterAdmComponent},
      {path: 'agendalist', component: AgendaListComponent},
      {path: 'home', component: HomeComponent},
      {path: 'agendacalendar', component: AgendaCalendarComponent}
    ]),
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    BryntumCalendarModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
