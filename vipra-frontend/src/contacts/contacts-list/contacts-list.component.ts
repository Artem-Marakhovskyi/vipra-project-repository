import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../common/services/contentful-service';
import { Contact } from '../../common/entities/contact';
import { mapContact } from '../../common/mappingLayer/mapper';

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  
  private phoneContacts : Contact[] = [];

  private nonPhoneContacts : Contact[] = [];

  constructor(private contentfulService : ContentfulService) {
  }

  ngOnInit() {
    this.contentfulService.ofContentType<Contact>(
      Contact.CONTENT_TYPE_ID,
      Contact.ORDER_FIELD,
      mapContact,
      false,
      10,
      0
    ).subscribe(
      contacts =>
      {
        this.phoneContacts = contacts.filter(e => e.isPhone);
        this.nonPhoneContacts = contacts.filter(e => !e.isPhone);
      });
  }
}
