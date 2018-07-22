import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutCompanyComponent } from '../about-company/about-company.component';
import { SharedModule } from '../common/shared.module';
import { WelcomeComponent } from '../home/welcome/welcome.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutCompanyComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    HomeModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
