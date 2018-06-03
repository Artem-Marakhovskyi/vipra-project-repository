import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutCompanyComponent } from '../about-company/about-company.component';
import { SharedModule } from '../common/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutCompanyComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
