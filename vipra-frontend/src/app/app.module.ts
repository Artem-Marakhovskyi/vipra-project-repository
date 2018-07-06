import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutCompanyComponent } from '../about-company/about-company.component';
import { SharedModule } from '../common/shared.module';
import { WelcomeComponent } from '../welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutCompanyComponent,
    WelcomeComponent
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
