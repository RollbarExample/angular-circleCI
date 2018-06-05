import {Component, ErrorHandler, Injector, Inject} from '@angular/core';
import * as Rollbar from 'rollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private rollbar: Rollbar) {
  }

  title = 'Angular 4 with Rollbar';
  errorMessage = 'Hello World, Error Message';

  sendError() {
  }

  manualHandle() {
    this.rollbar.error(this.errorMessage);
  }
}
