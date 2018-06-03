import { Component, OnInit } from "@angular/core";
import { ContentfulService } from "../../services/contentful-service";
import { mapImage } from "../../mappingLayer/mapper";
import { Image } from "../../entities/image";

@Component({
    selector: 'logo',
    styleUrls: ['logo.component.scss'],
    templateUrl: 'logo.component.html'
})
export class LogoComponent implements OnInit {
 
    private static readonly LOGO_ENTRY_ID = "2UymGvlNhCoUsuags8mSqo";

    public imageUrl : string;

    /**
     *
     */
    constructor(
        private contentfulService : ContentfulService
    ) {
        
    }

    ngOnInit(): void {
        let assetLink = this.contentfulService
            .entry<Image>(LogoComponent.LOGO_ENTRY_ID, mapImage);
        
            this.contentfulService.asset(assetLink.assetId);
    }
}