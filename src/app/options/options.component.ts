import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  @Input() Title : any;
  @Output() action = new EventEmitter<Event>();
  constructor() { }

  ngOnInit(): void {
  }

}
