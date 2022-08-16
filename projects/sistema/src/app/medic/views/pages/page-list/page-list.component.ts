import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  @ViewChild("searchBox") searchBox!: ElementRef;

  listFields: Array<string> = [
    "id", "name", "lastname", "mcmp"
  ];

  dataOriginal = [
    { id: 1, name: "Juan Manuel", lastname: "Cespedes", mcmp: "333333", marked: false },
    { id: 2, name: "Aldo ", lastname: "Salas", mcmp: "322333", marked: false },
    { id: 3, name: "Carlos Enrique", lastname: "Mendoza", mcmp: "332343", marked: false },
  ]

  dataSource: any = [];

  constructor() {
    this.dataSource = [...this.dataOriginal]
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    fromEvent(this.searchBox.nativeElement, "keyup")
      .pipe(
        debounceTime(500)
      ).subscribe((data: any) => this.search(data.target.value))
  }

  toggleID(column: string) {

    const existColumn = this.listFields.indexOf(column);
    if (existColumn > -1) {
      this.listFields.splice(existColumn, 1);
    } else {
      this.listFields.push(column);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  search(valueToSearch: string) {

    this.dataSource = [
      ...this.dataOriginal.filter((el) => el.name.toLocaleLowerCase().includes(valueToSearch))
    ]
  }

}
