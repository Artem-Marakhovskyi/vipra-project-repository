import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../../common/entities/gallery-image';
import { GalleryContentService } from '../services/gallery-content.service';
import { ImageService } from '../../common/entityServices/image-service';
import { ContentfulService } from '../../common/services/contentful-service';

@Component({
  selector: 'gallery-content',
  templateUrl: './gallery-content.component.html',
  styleUrls: ['./gallery-content.component.scss']
})
export class GalleryContentComponent {


  private content : Array<GalleryImage>;

  constructor(
    private galleryContentService : GalleryContentService,
    private contentfulService : ContentfulService
  ) {
  }

  public ngOnInit() {
    this.galleryContentService.getGalleryContent()
    .subscribe(arr => {
      this.content = arr;
      arr.forEach(element => {
        var el = element;
        this.contentfulService.obtainAssetUrl(element.assetId)
          .subscribe(res => el.imageUrl = res);
      });
    });
  }
}
