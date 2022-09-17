import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'amb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
  title: string;
  group: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reference: MatDialogRef<FormComponent>
  ) {
    this.title = data ? 'EDIT' : 'ADD';
  }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?.id),
      nombre: new FormControl(this.data?.nombre, Validators.required)
    });

  }

  save() {
    const values = this.group.value;
    const driverId = values.id;
    delete values.id;

    this.reference.close({ id: driverId, record: values });
  }

}
