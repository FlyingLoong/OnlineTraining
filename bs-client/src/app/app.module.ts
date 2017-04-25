import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar'
import { ClassScheduleComponent } from './components/class-schedule/class-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ClassScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
