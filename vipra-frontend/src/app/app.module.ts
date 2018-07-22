import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from '../common/shared.module';
import { WelcomeComponent } from '../home/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ContactsModule } from '../contacts/contacts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    ContactsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
