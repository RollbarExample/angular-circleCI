import {Component, ErrorHandler, Injectable} from '@angular/core';
import * as Rollbar from 'rollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {

 constructor(private rollbar: Rollbar) {

 }
  
  title = 'Angular 4 with Rollbar';
  errorMessage = 'Hello World, Error Message';

 sendError() {
    if ( 1 === 1 ) {
      throw new Error(this.errorMessage);
    }
  }
  manualHandle() {
      this.rollbar.error(this.errorMessage);
  }
}
