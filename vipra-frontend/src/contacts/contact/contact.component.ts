import { Component, Input } from '@angular/core';
import { Contact } from '../../common/entities/contact';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
  @Input() public content : Contact;
  
  onInit() {
    
  }
}
