import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'calendar',
})
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  calendar: Object;
  selectedEvent: Object;
  viewTitle: String;
  eventSource: Array<{
    title: string,
    startTime: Date,
    endTime: Date,
    allDay: boolean,
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.calendar = {
      mode: 'month',
      currentDate: '',
    };

    this.selectedEvent = '';
    this.viewTitle = '';

    this.eventSource = [
      {
        title: 'Evento de teste!',
        startTime: new Date(),
        endTime: new Date(),
        allDay: false,
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

  onCurrentDateChanged = (ev: Date) => {
    console.warn('Currently viewed date:', ev);
  };

  onEventSelected = (event) => {
    this.selectedEvent = event;
  };

  onViewTitleChanged = (title: string) => {
    this.viewTitle = title;
  };

  onTimeSelected = (ev: { selectedTime: Date, events: any[] }) => {
    console.warn('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0));
  };
}
