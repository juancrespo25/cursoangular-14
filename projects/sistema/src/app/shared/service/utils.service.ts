import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class UtilsService {

  constructor(private readonly dialog: MatDialog) { }

  showModalWindow(classComponent: any, options: { [s: string]: string | number | boolean | object }) {
    this.dialog.open(classComponent, options);
  }
}
