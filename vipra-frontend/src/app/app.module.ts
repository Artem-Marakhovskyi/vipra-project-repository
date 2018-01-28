import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentfulService } from '../common/services/contentful-service';
import { ErrorReason } from '../common/errors/error-reason';
import { ContentfulValues } from '../common/infrastructure/contentful-values';
import { Logger } from 'angular2-logger/core';
import { AboutCompanyComponent } from '../about-company/about-company.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutCompanyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ContentfulValues,
    ErrorReason,
    ContentfulService,
    Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
