import { Component, OnInit } from '@angular/core';
import { ImageService } from '../common/entityServices/image-service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  private static readonly IMAGE_ASSET_ID = "7JzHB2xMLSwWSwayqwIAKC";

  public backgroundUrl : string;

  constructor(
    private imageService : ImageService
  ) {

  }

  public ngOnInit() {
    this.imageService.getImageUrl(WelcomeComponent.IMAGE_ASSET_ID)
      .subscribe(url => this.backgroundUrl = url);
  }
}
