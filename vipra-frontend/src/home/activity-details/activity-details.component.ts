import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../common/entityServices/image-service';
import { ContentfulService } from '../../common/services/contentful-service';
import { Activity } from '../../common/entities/activity';
import { mapActivity } from '../../common/mappingLayer/mapper';

@Component({
  selector: 'activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent {
  public activities : Activity[];

  constructor(
    private imageService : ImageService,
    private contentfulService : ContentfulService
  ) {
    this.activities = [];
  }

  public ngOnInit() {
    this.contentfulService.ofContentType(
      Activity.CONTENT_TYPE_ID,
      '',
      mapActivity
    ).subscribe(items => this.activities = items);
  }
}
