import { Component, ContentChildren, Input, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
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
  @ContentChildren(MatColumnDef, { descendants: true }) ColumnsDef!: QueryList<MatColumnDef>//almacenando las columnas que se encuentren
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>//referencia al MatTable

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    if (changes["metaColumns"]) {
      this.listFields = this.metaColumns.map((el) => el.field)
      console.log(this.listFields)
    }

  }

  ngOnInit(): void {
  }

  selectRow(row: any) {
    row["marked"] = !row["marked"];
  }

  ngAfterContentInit() {
    if (!this.ColumnsDef) {
      return
    }

    this.ColumnsDef.forEach((ColumnsDef) => {
      this.listFields.push(ColumnsDef.name);
      this.table.addColumnDef(ColumnsDef)
    })
  }

}
