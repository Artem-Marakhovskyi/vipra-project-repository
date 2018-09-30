import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from '../common/shared.module';
import { WelcomeComponent } from '../home/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ContactsModule } from '../contacts/contacts.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ReactiveFormsModule } from '@angular/forms';
import { CallUsFormComponent } from './call-us-form/call-us-form.component';
import { ShowPhotoFormComponent } from './show-photo-form/show-photo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CallUsFormComponent,
    ShowPhotoFormComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    ContactsModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
