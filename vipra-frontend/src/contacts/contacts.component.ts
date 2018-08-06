import { Component, OnInit } from '@angular/core';
import { CallingBusService } from '../common/infrastructure/calling-bus-service';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  public ctaText = 'Связаться с нами';

  constructor(
    private callingCusService : CallingBusService
  ) {

  }

  public ngOnInit() {
    
  }

  public callUs() {
     this.callingCusService.callForm();
  }
}
