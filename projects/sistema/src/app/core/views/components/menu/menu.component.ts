import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Menu, MenuService } from 'projects/sistema/src/app/shared/service/menu.service';

@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {

  public menu: Menu[];

  constructor(private readonly menuService: MenuService) {
    this.menu = menuService.getItems();
  }

  ngOnInit(): void {
  }

}
