import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable()
export class UtilsService {

  constructor(private readonly dialog: MatDialog) { }

  showModalWindow(classComponent: any, options: { [s: string]: string | number | boolean | object }): MatDialogRef<any> {
    return this.dialog.open(classComponent, options);
  }
}
