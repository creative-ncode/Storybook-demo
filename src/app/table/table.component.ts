import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export default class TableComponent implements OnInit{
  @Input()  Headings : any;
  @Input() Info : any;
  @Input() BgColor : any;
  
  group: 'bangtan' | 'blackpink'  = 'bangtan';
  allSongs : any = {};
  constructor() { }
  
  ngOnInit() {
  }
  goToSongs(event: any,value:any){
    window.alert("Button Clicked")
  }
  // public get classes(): string[] {

  //   return ['idol-group--', `idol-group--${this.group}`];
  // }
}
