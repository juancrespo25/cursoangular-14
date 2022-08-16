import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username = "Juan Crespo";

  @Output() onToggleMenu: EventEmitter<void> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  toogleMenu() {
    this.onToggleMenu.emit();
  }

}
