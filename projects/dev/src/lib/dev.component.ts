import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-dev',
  template: `
    <p>
      dev works!
    </p>
  `,
  styles: [
  ]
})
export class DevComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
