import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe(() => {
      this.viewportScroller.scrollToPosition([0, 0])
    });
  }

  title = 'hotelri';

}
