import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'amb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

  group: FormGroup;
  title: String;

  constructor(private readonly reference: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    //private readonly referenece: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: any

    this.title = this.data ? "Edit" : "Add"
    this.group = new FormGroup({
      id: new FormControl(this.data?.id),
      name: new FormControl(this.data?.name, [
        Validators.required,
        Validators.pattern(/[a-zA-Z]+$/)
      ]),
      lastname: new FormControl(this.data?.lastname, Validators.required),

    })
  }

  ngOnInit(): void {
  }

  save() {
    if (this.group.valid) {
      const values = this.group.value;
      const userId = values.id;
      delete values.id;

      this.reference.close({ id: userId, record: values });
    }
  }

}
