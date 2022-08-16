import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'amb-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() length: number = 0;
  @Input() pageSize: number = 0;
  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  changePage(pageEvent: PageEvent) {
    this.onChangePage.emit(pageEvent.pageIndex);
    console.log('pageIndex', pageEvent.pageIndex);
  }
}
