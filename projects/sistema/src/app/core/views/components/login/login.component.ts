import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApplication } from '../../../application/auth.application';
import { AuthFactory } from '../../../domain/auth.factory';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  group: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly authApplication: AuthApplication) {
    this.group = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  login() {

    const values = this.group.value;
    const auth = AuthFactory.create(values.correo, values.password);

    this.authApplication.login(auth)
  }


}
