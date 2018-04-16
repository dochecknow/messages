import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private locationNav: Location) { }

  title = 'app';
  height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) * 0.8 + 'px';
  top = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) * 0.1 + 'px';
  onBackClick() {
    this.locationNav.back();
   // this.router.navigate(-1).
  }
}
