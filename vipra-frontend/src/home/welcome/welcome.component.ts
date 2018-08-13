import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../common/entityServices/image-service';
import { CallingBusService } from '../../common/infrastructure/calling-bus-service';
import { ContentfulService } from '../../common/services/contentful-service';
import { Motto } from '../../common/entities/motto';
import { mapMotto } from '../../common/mappingLayer/mapper';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  private static readonly IMAGE_ASSET_ID = "7JzHB2xMLSwWSwayqwIAKC";

  public knowMore = "Узнать больше";

  public backgroundUrl : string;
  public motto : Motto = new Motto('','','');

  constructor(
    private imageService : ImageService,
    private callingUsService : CallingBusService,
    private contentfulService : ContentfulService
  ) {

  }

  public ngOnInit() {
    this.imageService.getImageUrl(WelcomeComponent.IMAGE_ASSET_ID)
      .subscribe(url => this.backgroundUrl = url);

    this.contentfulService.ofContentType(
      Motto.CONTENT_TYPE_ID,
      '',
      mapMotto
    ).subscribe(items => this.motto = items[0]);
  }

  public call() {
    this.callingUsService.callForm();
  }
}
