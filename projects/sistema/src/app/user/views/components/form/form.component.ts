import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-zA-Z]+$/)
      ]),
      lastname: new FormControl('', Validators.required),

    })
  }

  ngOnInit(): void {
  }

  save() {

    if (this.group.valid) {
      const values = this.group.value;
      console.log(values);
      this.referenece.close();
    }

  }

}
