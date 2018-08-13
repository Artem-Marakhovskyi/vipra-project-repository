import { Component } from "@angular/core";
import { FooterContent } from "../../entities/footer-content";
import { ContentfulService } from "../../services/contentful-service";
import { mapFooterContent } from "../../mappingLayer/mapper";

@Component({
    selector: 'app-footer',
    styleUrls: ['footer.component.scss'],
    templateUrl: 'footer.component.html'
  })
export class FooterComponent {
    public nowYear : string;
    public content : FooterContent;

    /**
     *
     */
    constructor(
      public contentfulService : ContentfulService
    ) {
      this.nowYear = new Date().getFullYear().toString();
      this.content = new FooterContent('','');
    }

    public ngOnInit() {
      this.contentfulService.ofContentType(
        FooterContent.CONTENT_TYPE,
        'left_side',
        mapFooterContent)
      .subscribe(items => this.content = items[0]);
    }
}