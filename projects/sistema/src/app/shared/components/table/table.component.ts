import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MetaColumn } from '../../interfaces/metacolumn.interface';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  listFields: any[] = [];
  @Input() dataSource: any = [];
  @Input() metaColumns: MetaColumn[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    if (changes["metaColumns"]) {
      this.listFields = this.metaColumns.map((el) => el.field)
    }

  }

  ngOnInit(): void {
  }

  selectRow(row: any) {
    row["marked"] = !row["marked"];
  }

}
