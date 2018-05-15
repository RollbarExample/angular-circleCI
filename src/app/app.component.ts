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
    console.log('Introducing an error code here');
    if ( 1 === 1 ) {
      throw new Error(this.errorMessage);
    }
  }
  manualHandle() {
      this.rollbar.error(this.errorMessage);
  }
}
