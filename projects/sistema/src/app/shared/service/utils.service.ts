import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from '../components/confirm/confirm.component';

@Injectable()
export class UtilsService {

  constructor(private readonly dialog: MatDialog) { }

  showModalWindow(
    classComponent: any,
    options: { [s: string]: string | number | boolean | object }
  ): MatDialogRef<any> {
    return this.dialog.open(classComponent, options);
  }
  showConfirm(message: string = "") {

    const reference = this.dialog.open(ConfirmComponent, { width: "340px", disableClose: true });

    if (message) {
      reference.componentInstance.messageToConfirm = message;
    }

    return reference.afterClosed();

  }

}
