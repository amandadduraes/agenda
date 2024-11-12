import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [FullCalendarModule, CommonModule, MenuComponent],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent implements OnInit {
  calendarOptions: any;
  weeks: number[][] = [];
  mainCalendarWeeks: number[][] = [];
  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth();
  todayDate: number = new Date().getDate();
  todayMonth: number = new Date().getMonth();
  todayYear: number = new Date().getFullYear();
  todayEvents: any[] = [];
  tomorrowEvents: any[] = [];

  monthNames: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  events = [
    { title: 'Daily Standup', date: '2022-01-03', color: 'green', time: '08:00' },
    { title: 'Budget Review', date: '2022-01-03', color: 'red', time: '09:00' },
    { title: 'Sasha Jay 1:1', date: '2022-01-03', color: 'orange', time: '10:00' },
    { title: 'Web Team Progress Update', date: '2022-01-03', color: 'blue', time: '11:00' },
    { title: 'Social team briefing', date: '2022-01-03', color: 'green', time: '12:00' },
    { title: 'Daily Standup', date: '2022-01-04', color: 'green', time: '13:00' },
    { title: 'Tech Standup', date: '2022-01-04', color: 'blue', time: '14:00' },
    { title: 'Developer Progress', date: '2022-01-04', color: 'purple', time: '15:00' }
  ];

  ngOnInit(): void {
    this.setCalendarOptions();
    this.generateCalendar(this.currentYear, this.currentMonth);
    this.loadTodayAndTomorrowEvents();
  }

  setCalendarOptions(): void {
    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: this.events,
      eventDidMount: (info: any) => {
        if (info.event.extendedProps.color) {
          info.el.style.backgroundColor = info.event.extendedProps.color;
        }
      }
    };
  }

  loadTodayAndTomorrowEvents(): void {
    const today = new Date(this.todayYear, this.todayMonth, this.todayDate);
    const tomorrow = new Date(this.todayYear, this.todayMonth, this.todayDate + 1);

    this.todayEvents = this.events.filter(event => {
      return new Date(event.date).toDateString() === today.toDateString();
    });

    this.tomorrowEvents = this.events.filter(event => {
      return new Date(event.date).toDateString() === tomorrow.toDateString();
    });
  }

  generateCalendar(year: number, month: number): void {
    this.weeks = [];
    this.mainCalendarWeeks = [];

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    let week: number[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const dayOfWeek = date.getDay();

      if (i === 1 && dayOfWeek !== 0) {
        for (let j = 0; j < dayOfWeek; j++) {
          week.push(0);
        }
      }

      week.push(i);

      if (dayOfWeek === 6 || i === daysInMonth) {

        this.weeks.push(week);
        this.mainCalendarWeeks.push([...week]);
        week = [];
      }
    }
  }

  prevMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar(this.currentYear, this.currentMonth);
  }
}
