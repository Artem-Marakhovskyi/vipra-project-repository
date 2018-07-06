import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ContentfulService } from '../common/services/contentful-service';
import { AboutCompany } from '../common/entities/about-company';
import { mapAboutCompany } from '../common/mappingLayer/mapper';
import { ModalService } from '../common/infrastructure/modal-service';

@Component({
  selector: 'about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.css']
})
export class AboutCompanyComponent implements OnInit{
  
  title : string;
  content : string;
  fullImagePath = '/assets/dog.jpg';

  public constructor(
    private _contentfulService : ContentfulService,
    private _modalService : ModalService,
  ) { }

  ngOnInit(): void {
    var entries = this._contentfulService.ofContentType<AboutCompany>(
      AboutCompany.CONTENT_TYPE_ID,
      AboutCompany.ORDER_FIELD,
      mapAboutCompany
    ).subscribe(
      (data) => {      
        this.title = data[0].title;
        this.content = data[0].about;
      });
  }
  
}
