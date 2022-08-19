import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'amb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

  group: FormGroup;

  constructor(private readonly referenece: MatDialogRef<FormComponent>) {

    this.group = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),

    })
  }

  ngOnInit(): void {
  }

  save() {
    const values = this.group.value;
    console.log(values);
    this.referenece.close();
  }

}
