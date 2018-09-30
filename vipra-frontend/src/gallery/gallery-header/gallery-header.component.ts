import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../common/services/contentful-service';
import { GalleryHeader } from '../../common/entities/gallery-header';
import { mapGalleryHeader } from '../../common/mappingLayer/mapper';

@Component({
  selector: 'gallery-header',
  templateUrl: './gallery-header.component.html',
  styleUrls: ['./gallery-header.component.scss']
})
export class GalleryHeaderComponent implements OnInit{

  public header : string;

  constructor(
    private contentService : ContentfulService
  ) {

  }
  
  public ngOnInit(): void {
    this.contentService.ofContentType(GalleryHeader.CONTENT_TYPE_ID, 'content', mapGalleryHeader).subscribe(r => this.header = r[0].content);
  }
}
