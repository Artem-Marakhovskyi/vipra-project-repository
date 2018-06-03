import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentfulService } from '../common/services/contentful-service';
import { ErrorReason } from '../common/errors/error-reason';
import { ContentfulValues } from '../common/infrastructure/contentful-values';
import { AboutCompanyComponent } from '../about-company/about-company.component';
import { ModalService } from '../common/infrastructure/modal-service';
import { ModalComponent } from '../common/infrastructure/modals/modal.component';
import { SharedModule } from '../components/common/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutCompanyComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot()
  ],
  providers: [
    ContentfulValues,
    ErrorReason,
    ContentfulService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
