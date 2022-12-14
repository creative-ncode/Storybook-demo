import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() Title : any;
  @Output() songs = new EventEmitter<Event>();
  constructor() { }

  ngOnInit(): void {
  }

}