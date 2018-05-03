import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const versions = require('../environments/versions');

console.log(versions.versions.revision);


import { AppComponent } from './app.component';
import * as Rollbar from 'rollbar';
import {RollbarErrorHandler} from '../services/rollbar-error-handler';
import { version } from 'punycode';

const rollbarConfig = {
  accessToken: 'f627d5e044a24b9987a23e54c5df352e',
  captureUncaught: true,
  captureUnhandledRejections: true,
    enabled: true,
  code_version: versions.versions.revision,
  environment: 'production'
};

console.log(JSON.stringify(rollbarConfig));

export function rollbarFactory() {
  return new Rollbar(rollbarConfig);
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    { provide: Rollbar,  useFactory: rollbarFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
