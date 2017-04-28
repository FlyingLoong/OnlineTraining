import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-schedule',
  templateUrl: './class-schedule.component.html',
  styleUrls: ['./class-schedule.component.css']
})
export class ClassScheduleComponent implements OnInit {

  calendarOptions: Object = {
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listMonth'
		},
    dayClick: function(date, jsEvent, view) {
      console.log(date.format());
    },
    defaultView: 'agendaWeek',
    fixedWeekCount: false
  }

  constructor() { }

  ngOnInit() {
  }

}
