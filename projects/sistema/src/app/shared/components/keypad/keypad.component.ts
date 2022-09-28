import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amb-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  @Output() onExport = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  export(type: string) {
    this.onExport.emit(type);
  }

}
