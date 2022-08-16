import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/medic'])
  }
}
