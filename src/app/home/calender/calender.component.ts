import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    
    initialView: 'dayGridMonth',
    weekends: true,
    navLinks: false,
    eventColor: 'gray',
  
    events: [
      { title: 'event 1', date: '2021-12-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

}
