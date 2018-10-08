import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../common/services/contentful-service';
import { AboutCompany } from '../common/entities/about-company';
import { mapAboutCompany } from '../common/mappingLayer/mapper';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  private about : AboutCompany;

  constructor(
    private contentfulService : ContentfulService
  ) {
    
  }

  ngOnInit(): void {
    this.contentfulService.ofContentType<AboutCompany>(AboutCompany.CONTENT_TYPE_ID, 'header', mapAboutCompany)
      .subscribe(r => this.about = r[0]);
  }

  }
