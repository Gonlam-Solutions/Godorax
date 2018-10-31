import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentUrl: String;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => (this.currentUrl = _.url));
  }

  Searching() {
    console.log('hola');
  }
  condition() {
    return true;
  }
}
