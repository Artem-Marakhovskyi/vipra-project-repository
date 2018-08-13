import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../common/services/contentful-service';
import { Requisites } from '../../common/entities/requisites';
import { mapRequisites } from '../../common/mappingLayer/mapper';

@Component({
  selector: 'requisites',
  templateUrl: './requisites.component.html',
  styleUrls: ['./requisites.component.scss']
})
export class RequisitesComponent implements OnInit {
  
  private requisites : Requisites;

  constructor(
    private contentfulService : ContentfulService
  ) {
    this.requisites = new Requisites('', null);
  }

  public ngOnInit(): void {
    this.contentfulService.ofContentType(
      Requisites.CONTENT_TYPE_ID,
      '',
      mapRequisites
    ).subscribe(items => this.requisites = items[0]);
  }
}
