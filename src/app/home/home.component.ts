import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heading : any = [];
  data : any = [];
  isRange: boolean = true;
  hasTime: boolean = true;
  startDate: any;
  endDate: any;
  maxDate: any;
  minDate: any;
  color = 'beige';
  constructor() { }

  ngOnInit() {
    this.heading = ['Name','Age','Position'];
    this.data = [['Kim Namjoon','28','Rapper'],['Kim SeokJin','30','Vocalist'],['Min Yoongi','29','Rapper']]
  }

}
