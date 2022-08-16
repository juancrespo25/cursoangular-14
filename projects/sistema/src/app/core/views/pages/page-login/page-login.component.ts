import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'projects/sistema/src/app/config/injections/layout/services/layoutservice';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  constructor(private readonly layoutService: LayoutService) {
    //this.layoutService.setConfiguration({ hideHeader: true, hideMenu: true });
    this.layoutService.configuration = { hideHeader: true, hideMenu: true }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.layoutService.configuration = { hideHeader: false, hideMenu: false }
  }

}
