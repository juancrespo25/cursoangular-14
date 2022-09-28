import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthApplication } from '../../../application/auth.application';
import { StorageApplication } from '../../../application/storage.application';

@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username = "Juan Crespo";

  @Output() onToggleMenu: EventEmitter<void> = new EventEmitter()

  constructor(private readonly auth: AuthApplication, readonly storage: StorageApplication) {
    this.username = storage.getFieldToken('name') as string;
  }

  ngOnInit(): void {
  }

  toogleMenu() {
    this.onToggleMenu.emit();
  }

  logout() {
    this.auth.logout();
  }
}
