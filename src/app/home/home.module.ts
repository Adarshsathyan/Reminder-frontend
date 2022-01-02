import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CalenderComponent } from './calender/calender.component'
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { NgxSpinnerModule } from "ngx-spinner";

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    CalenderComponent,
    HomeComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    FullCalendarModule,
    MatTableModule,
    NgxSpinnerModule
  ]
})
export class HomeModule { }
