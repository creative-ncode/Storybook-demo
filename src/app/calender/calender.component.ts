import { Component, OnInit,Input, EventEmitter,Output,ViewChild,ElementRef } from '@angular/core';
import * as moment from 'moment';
import '../../assets/scripts.js';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  selectedMoments : any;
  canSelect : boolean = false;
  @Input()
  twelveHours!: boolean;
  constructor() { }

  ngOnInit() { 
    this.selectedMoments = [new Date(), new Date()];
  }

  selectDateRange(event: any, value: any) {
    this.canSelect = true;
    let start = new Date();
    let end = new Date();
    switch (value) {
      case 'Last 7 Days':
        start.setDate(end.getDate() - 6)
        this.selectedMoments = [new Date(start), new Date(end)];
        break;
      case 'Last 14 Days':
        start.setDate(end.getDate() - 13)
        this.selectedMoments = [new Date(start), new Date(end)];
        break;
      case 'Last 30 Days':
        start.setDate(end.getDate() - 29)
        this.selectedMoments = [new Date(start), new Date(end)];
        break;
      case 'Last 6 Months':
        start.setDate(end.getDate() - 179)
        this.selectedMoments = [new Date(start), new Date(end)];
        break;
      case 'Last Year':
        start.setDate(end.getDate() - 364)
        this.selectedMoments = [new Date(start), new Date(end)];
        break;
      case 'Custom':
        this.selectedMoments = [new Date(start), new Date(end)];
        break;
    }
  }
}
