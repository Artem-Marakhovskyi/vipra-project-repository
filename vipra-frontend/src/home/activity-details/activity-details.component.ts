import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../common/entityServices/image-service';

@Component({
  selector: 'activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent {

  public backgroundUrl : string;

  constructor(
    private imageService : ImageService
  ) {

  }
}
